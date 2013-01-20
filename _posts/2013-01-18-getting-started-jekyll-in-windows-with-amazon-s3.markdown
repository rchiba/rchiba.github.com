---
layout: post
title: Getting Started With Jekyll on Windows with Amazon S3
tags:
- Code
status: publish
type: post
published: true
meta:
  _edit_last: '1'
---

I have created this guide in the interest of helping other people figure out how to set up Jekyll on Windows (I use Linux all day at work, but my home machine is a Windows laptop). Some of the guides out there didn't work for me since the packages they referenced were Mac-only, but hopefully this will work out for you.

*A brief overview of Jekyll*

Jekyll is a static site generator written in Ruby (requires no Ruby knowledge to use). Many people use it for generating their personal sites / blogs because the cost of hosting it on Amazon S3 is orders of magnitude cheaper than ordinary shared hosting, and orders of magnitude more reliable in serving the occasional high traffic spike. People also like it because there's less code between you and your writing. Since the system is just a way to convert Markdown or HTML formatted posts into a templated HTML output, it requires very little configuration and setup to get a site up and running.

First, get started by downloading [Ruby for Windows](http://rubyinstaller.org/) along with [Ruby Development Kit](http://rubyinstaller.org/downloads/). You will also need to put the rubygems/bin folder into your PATH (**Right click "Computer" -> Properties -> Advanced System Settings -> Environment Variables -> Edit Path variable and append the path to the bin folder**).

Install jekyll
    gem install jekyll

Configure and run jekyll
Download some boilerplate code for your new jekyll site by cloing this convenient [jekyll boilerplate repository](https://github.com/necolas/jekyll-boilerplate) by necolas. Then, use it to create a git repository of your own. Help in doing this can be found [at github](https://github.com/necolas/jekyll-boilerplate.git).

Setup Amazon
Log into the s3 console and create two buckets, one called **yourdomain.com** and another called **www.yourdomain.com**. In the properties of the **www.yourdomain.com*** bucket, go to "Static Website Hosting" and select "Enable website hosting". Then for the index document use "index.html" and for th error document use "error.html". You can create error.html later as it's not part of the boilerplate code. Then, configure the **yourdomain.com** bucket by editing its properties in the same way, except select "Redirect all requests to another host name", and redirect all the requests to **www.yourdomain.com**. 

Setup your DNS
Go to your DNS settings and for your zone apex record (Usually donated with an *@*, it represents the record that is used when a user types in "yourdomain.com"), have it set to URL Redirect to "www.yourdomain.com" and for the *www* record, have it point to the endpoint of your "www.yourdomain.com" record, which you can find in its properties under "Static Website Hosting"

Setup the s3 interface
Next, you'll set up an easy way to push your new site to s3. Then, download an s3 interface for the Windows command line. (I use this instead of the jekyll-s3 package recommended on the main Jekyll repository because for some reason jekyll-s3 would not upload my images correctly to s3)

[s3.exe for Windows](https://s3.codeplex.com/)

Lastly, cd to the directory your jekyll blog is at and use the following command in your command line:

    s3 put www.bucketname.com _site/ /sub:withdelete /sync /acl:public-read

This command uploads your the **_site** folder to your **bucketname.com** bucket, deleting files on s3 that don't exist anymore locally, only uploading files that have changed since last upload, and making all the files on s3 public. 

For your convenience, you can put this message in a post-commit hook so that your s3 bucket syncs up every time you commit. To do this, within your blog repository add a command to a new file at .git/hooks/post-commit     

Then, go to your site.
