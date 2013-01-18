---
layout: post
title: Getting Started With Jekyll on Windows with Amazon S3
tags:
- Code
status: publish
type: post
published: false
meta:
  _edit_last: '1'
---

I have created this guide in the interest of helping other people figure out how to set up Jekyll on Windows (I use Linux all day at work, but my home machine is a Windows laptop). Some of the guides out there didn't work for me since the packages they referenced were Mac-only, but hopefully this will work out for you.

*A brief overview of Jekyll*

Jekyll is a static site generator written in Ruby (that also requires no Ruby knowledge to use). Many people use it for generating their personal sites / blogs because the cost of hosting it on Amazon S3 is orders of magnitude cheaper than ordinary shared hosting, and orders of magnitude more reliable in serving the occasional high traffic spike. People also like it because there's less "magic" between you and your writing. Since the system is just a way to convert Markdown or HTML formatted posts into a templated HTML output, it requires very little configuration and setup to get a site up and running.

First, get started by downloading Ruby for Windows along with RubyGems Dev



Then, download an s3 interface for the Windows command line. (I use this instead of the jekyll-s3 package recommended on the main Jekyll repository because for some reason jekyll-s3 would not upload my images correctly to s3)

[s3.exe for Windows](https://s3.codeplex.com/)

Lastly, cd to the directory your jekyll blog is at and use the following command in your command line:

    s3 put bucketname.com _site/ /sub:withdelete /sync /acl:public-read

This command uploads your the **_site** folder to your **bucketname.com** bucket, deleting files on s3 that don't exist anymore locally, only uploading files that have changed since last upload, and making all the files on s3 public. 

For your convenience, you can put this message in a post-commit hook so that your s3 bucket syncs up every time you commit.

Then, go to your site.
