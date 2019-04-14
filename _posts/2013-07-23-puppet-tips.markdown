---
layout: post
title: Puppet - Portable Server Configurations, yay!
description: A collection of resources for puppet
tags:
- code
- professional
status: publish
type: post
published: true
meta:
  _edit_last: '1'
---
<img alt="puppet" src="/images/2013-07-26-puppet/puppet_screen.jpg" />

Being a part of a small development team working on a growing product, Nikhil and I both have to be our own sysadmins. And for the past couple months I have struggled with the growing amount of time we spend configuring a server to an application up and running. Everything from SSH, Users/Permissions, Networking, Middleware, and the plethora of application dependencies can make any server configuration a headache of unportable spaghetti mystery components. So I began to search online for a better method than manually configuring everything and dumping random commands into a shell script.

I was delighted when I found out that there are many production-ready tools to help automate such tasks. The one I decided to use was [Puppet](https://puppetlabs.com/puppet/what-is-puppet/), mostly because I read that it was easier to learn than Chef. Much to my delight, I was able to successfully use Puppet to transfer our webapp from AWS to Rackspace, and in the process, make it easy to transfer to any arbitrary server in the future.

Here's what I like about puppet:

1. Puppet is easy to learn. There are plenty of resources online, and the official [Puppet Cookbook](http://www.puppetcookbook.com/) has plenty of useful examples.
2. Puppet's DSL is concise and readable.
3. Puppet's error messages and info output is readable.

Why is it better than a shell script?

1. A Puppet configuration describes the end state of a system, which is easier to read and maintain than a list of commands.
2. Puppet includes a distributed execution system to allow simultaneous configuration deployment on many machines (although I haven't used this feature yet).
3. Puppet allows you to define hierachical dependency relationships among the different states of the system. The cause of many bugs in a shell script.
4. Puppet will quickly tell you how and why it failed to produce the intended system state. A shell script will die randomly and you will have to dig through logs while restarting the script to figure out why it failed.
5. Puppet is built to be compatible with most major operating systems and deployment environments. Good luck trying to get your bash script running on Windows!
6. Puppet only changes the things it needs to change to reach the desired state. Building the same behavior into a script can take a lot of work.

In the end, I highly encourage exploring the use of this tool if you're spending more than an hour configuring a server. Being able to have a fully configured node by cloning a puppet manifest repository and running a single command is a wonderful feeling.

Other Puppet Resources:
[A Puppet Tutorial - DZone](http://java.dzone.com/articles/minimalistic-practical)
[A Repo of Puppet Exapmles - jordansissel](https://github.com/jordansissel/puppet-examples#)
[Puppet Tips and Tricks - docs.puppetlabs.com](http://docs.puppetlabs.com/guides/techniques.html)
