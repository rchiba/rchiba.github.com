---
layout: post
title: Using Selenium and ECS to Create Reliable Rendering on Signage Systems
description: Rendering videos of webpages in the cloud for mall kiosks and other digital signage
tags:
- professional
- code
status: publish
type: post
published: true
meta:
  _edit_last: '1'
---

<video autoplay loop muted>
  <source type="video/mp4" src="https://cdn.filestackcontent.com/PokZqp2tRyfFT9XPWAne">
  Your browser does not support the video element.
</video>

## The Problem

My company, TINT, produces dynamic social displays for digital signage (among many social media related products). If you're walking through a mall and you see Instagram photos show up on a kiosk screen, it could be us, especially if it's a Westfield mall. Our product is built using web technologies (HTML/CSS/JS) and is rendered through a web browser.

Traditionally, we have relied on the browsers supplied by the signage company vendors, such as Broadsign, Brightsign, and FourWindsInteractive to render our content. However, this often results in performance issues because the hardware isn't powerful enough to render smooth animations in a browser, or the browser is outdated and difficult to support.

## The Solution

My approach in tackling this was to remove the unpredictability of the signage system's browser, and use a browser running on a server to render a video that can be delivered to the signage system. After all, what kind of signage system doesn't support video? After doing some research, I found that most signage systems can download a video file from a URL and cache it locally, syncing it occasionally to keep it up-to-date. This is usually done through Media RSS, or MRSS. 

Using video instead of HTML has a number of advantages, including:

1. Reliable playback during network instability
2. Increased compatibility with older hardware/software 
3. Consistent animation performance
4. Easier troubleshooting

The tradeoffs are that:

1. The dimensions of the screen must be known beforehand
2. There is greater delay from when content is posted on social media to when it is shown on the screen

For most customers, the advantages outweigh the disadvantages, so I decided to move forward with the video approach.

The only thing I had to do was figure out how to create automatically updating videos from webpages in a simple, but scalable way. Unfortunately, there aren't any off-the-shelf services that provide this kind of thing (startup idea?). However, after some digging, I came up with a creative way to do it myself:

First, I found [Headless](https://github.com/leonid-shevtsov/headless), a Ruby gem that creates a virtual X screen and records videos of Selenium test runs. I used that to create a simple script to create videos of websites. Through trial and error, I figured out which flags Chrome requires to create a fullscreen video:

<script src="https://gist.github.com/rchiba/499afa72f71e8f1d241d42fb845daacf.js"></script>

Now I had to find a way to take this basic script and scale it up to be production-ready. I decided to use [AWS ECS](https://aws.amazon.com/ecs/) and Docker since it is a simple way to wrap environments around tasks, and have them run on a schedule or in parallel. I thought about Lambda, but AWS Lambda doesn't support ruby, and I wasn't sure that Lambda was meant to handle a task as resource intensive as rendering a video from a chrome session. To store metadata about the videos, I used MySQL, and Sinatra to provide an endpoint for signage systems to request videos from.

A flow chart of the system:

![TINT Screencast Microservice - Flow Chart](https://draftin.com:443/images/57421?token=8qiGhqlBLw4TaRZLcYEuy45jFSVbTsh13Tg8fH4NZhDIVNKLSWQK_CDDEsaTq5-4ahp2_jqb9WYAAIqgEeOkYi8) 

Here's how it works:

1. The signage customer provides 4 inputs to an internal tool: URL of the social display, height/width of the screen, and the duration of the video
2. The tool returns 2 URLs which represent the link to the video file and a link to the corresponding MRSS feed
3. The customer uses either the video file or MRSS feed link in their signage system (depending on what their system accepts)
4. When the signage system first requests a video, it receives a response that says "video is being generated", while the service starts a ECS task which generates the video
5. Once the ECS task finishes, the video is saved and the video becomes available to download
6. The signage system periodically requests the video to download, so the second time it makes a request, the video is downloaded, then played on the screen
7. In the background, an ECS scheduled task iterates through all the videos that have been created to determine whether any videos need to be expired (I expire any videos that have not been requested in a day) or refreshed (I refresh videos every 30 minutes)
8. Voila:

<video autoplay loop muted>
  <source type="video/mp4" src="https://cdn.filestackcontent.com/lPsx91NxSzecM8y1tJkj">
  Your browser does not support the video element.
</video>

The system still has some imperfections which I haven't gotten around to addressing, which include:

* Autoscaling - I eventually want to use AWS Fargate to handle autoscaling of containers. Right now all of our microservices share resources on our ECS cluster, and I have to manually throttle my video microservice to balance resources. Unfortunately, as I write this Fargate does not support the `shm_size` parameter, which [Chrome crashes without](https://github.com/SeleniumHQ/docker-selenium/issues/392).
* Unnecessary Proxy - Currently the Sinatra server proxies the video from S3 to keep track of when videos were last accessed. However, I could be parsing S3 logs to do the same thing, which would reduce latency and infrastructure costs in delivering the video. 

Overall, I'm happy with how this project came out. It solves a problem for our signage customers and gave me a chance to creatively re-use Selenium in a way that I imagine its original creators didn't envision, to render visualizations for in-store screens:

![TINT display in Westfield SF Centre](https://cdn.filestackcontent.com/pXGqrzWQWm2c2cY5ZsSZ)

## Additional Reading

* [TINT Support: Signage Video Link Integration](https://tint.zendesk.com/hc/en-us/articles/360002743313-TINT-Signage-Video-Link-Integration)
