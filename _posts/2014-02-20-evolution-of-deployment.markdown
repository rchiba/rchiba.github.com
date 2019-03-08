---
layout: post
title: The Evolution of Your Deployment System
description: How you deploy your code onto multiple servers.
tags:
- devops
- professional
status: publish
type: post
published: true
meta:
  _edit_last: '1'
---

### Stage 1

You wake up one day and decide to build an app. You spin up a micro instance and start developing. Deployment is simple. Just git pull and you're done. When you expect more people to start loading the site, you spin up a couple more micros and put them behind a load balancer. This is the first time you've ever used these fancy load balancers, and everything seems to be humming along. Although, it gets annoying that you have to shell into each machine to update your code. 

### Stage 2

A couple weeks set in and it gets annoying to shell into each and every server to tweak anything. You do some sleuthing online and you read about [Capistrano](http://capistranorb.com/). So you set it up and after a half a day of being stuck on an SSH key issue, and another half a day tweaking the ruby code (while learning ruby at the same time), you can deploy with a single command. Yay.

### Stage 3

Except, the only hitch is that the site is down for 30 seconds to a minute while the deployment happens. Not a big deal when your site has a handful of users on it concurrently. But as you grow, more and more users notice when you have downtime and you cannot ignore the issue any longer. You can't figure out why Capistrano is causing the downtime anywhere on the web. Sigh. So, you decide to write a script that interacts with AWS to stagger Capistrano deploy commands and remove servers from the load balancer before deploying. After learning the [AWS CLI](http://aws.amazon.com/cli/), you cobble together a python script that results in zero downtime deployments. 

### Stage 4

Except, the script takes about 1 minute to run. Then, you have to double the number of servers since more and more people are using your service. That doubles deployment time to 2 minutes. Although it isn't impossible, waiting 2 minutes for your code to deploy begins to irritate you. But your coworker mentions [dploy.io](http://dploy.io) and you install it in 30 minutes. Suddenly you have a scalable deployment method that deploys in less than 10 seconds and even has an intuitive web interface. Lovely. Why didn't you figure this out earlier?
