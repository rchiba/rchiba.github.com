---
layout: post
title: Tuning Nginx and PHP-FPM
description: How I improved performance using optimized server configurations.
tags:
- code
status: publish
type: post
published: true
meta:
  _edit_last: '1'
---

I was running into the issue where our CPU on our nginx webapp servers was not being fully utilized, and caused timeouts whenever CPU went above about 10% and memory was hardly being used. I had tried changing the configurations for nginx in the past with no success, so things were getting out of hand. When our traffic spiked yesterday morning due to Google Cloud Developers Conference, [Where they are using Tint](https://cloud.google.com/events/google-cloud-platform-live/), we went down, and I had to increase our server count to 20 8GB 8vCPU servers.

Twenty servers to handle 20RPS just seemed ridiculous to me since nginx can handle thousands of RPS on a tuned machine. So I spent a couple of hours yesterday formulating a process to guess and check the effects of the server configurations in order to find out what was causing the issue.

## The Process

1. Isolate a single production server by removing it from all load balancers.
2. Set up a [Blitz.io](http://www.blitz.io) account and validate the server in step 1 using the various methods outlined within blitz.
3. Load test the server to see its performance.
4. Shell into the server and change the server configuration, I was experimenting with /etc/nginx/nginx.conf and /etc/php5/fpm/pool.d/www.conf (don't forget to restart the server)
5. Load test the server while running '[top](http://linuxaria.com/howto/understanding-the-top-command-on-linux?lang=en)' and see if the performance changed.

Those 5 steps allowed me to finally figure out a combination of settings that allowed nginx and PHP to better utilize the CPU. 

## Test Results

### Before
![Image of pm.max\_children = 5 test results](https://www.evernote.com/shard/s28/sh/3d0acd19-0b62-4472-b6e2-c6dc6bb53f3c/174663792b7b55eff243ed43882a8acc/deep/0/Menubar-and-Blitz---Load-testing-from-the-cloud-and-ryochiba---root@webapp-4-p---etc-php5-fpm---ssh---80-61-and-hm_api.php---dev_mac-and-HipChat---Nik-Aitharaju.png)

### After
![Image of pm.max\_children = 375 test results](https://www.evernote.com/shard/s28/sh/62a31cc9-4dfb-456d-873f-5f82c521ebe8/62f3c5e0427010b8098dc9093f26fea1/deep/0/Screenshot-3-25-14,-6-30-PM.png)

## Server Configuration Changes

### /etc/nginx/nginx.conf:
~(what I changed in nginx.conf)[https://www.evernote.com/shard/s28/sh/fbd35cb2-bdac-4a05-b478-a53ad7e9590f/97671f7a075683fbc5431fb52d62c177/deep/0/added-nginx-optimizations---5461e45---hypemarks-tint\_app.png]

### /etc/php5/fpm/pool.d/www.conf:
I changed pm.max\_children = 5 to pm.max\_children = 375

See the links below for more details on what these settings mean.

## Additional Findings
~[average day](https://www.evernote.com/shard/s28/sh/0373d0ec-41d1-4819-8be2-6caf2d07e039/c7163cfa4015b2886d66ae14a8d76bf6/deep/0/Overview---Google-Analytics.png)
* All of our traffic (~1600 concurrent users on Google Analytics realtime overview) can be handled by a single server with these new configurations. CPU of the single server handling all of our traffic was ~40%.
* 6 of these servers behind a load balancer, an average of 53RPS could be handled while keeping response time less than 1s. Usually our RPS is around 5-15.

## Links 

[Optimizing nginx and PHP-FPM](http://nls.io/optimize-nginx-and-php-fpm-max_children/)
[How to use top](http://linuxaria.com/howto/understanding-the-top-command-on-linux?lang=en)
[Understanding Load Averages](http://blog.scoutapp.com/articles/2009/07/31/understanding-load-averages)
