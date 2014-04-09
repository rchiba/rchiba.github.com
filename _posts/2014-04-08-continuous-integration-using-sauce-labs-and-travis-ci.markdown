---
layout: post
title: CI Using Sauce Labs and Travis CI
description: Learn how to setup a continuous integration system using sauce and travis.
tags:
- code
- devops
status: publish
type: post
published: true
meta:
  _edit_last: '1'
---

I've been meaning to set up a build / integration server for the past year but haven't gotten around to it for a myriad of reasons. Last week, I had enough with the 

* Features breaking every time a new feature is released (regression)
* Manually smoke testing URLs
* Having no structure for developing/testing new features

So, I decided to setup a Continuous Integration system for Tint! Here's some notes on what I found as I navigated the confusing waters of setting up a build server. 

## Initial research

> [Continuous integration](http://en.wikipedia.org/wiki/Continuous_integration): the practice, in software engineering, of merging all developer working copies with a shared mainline several times a day.

Outline what your needs are with the build server. For example, my needs were:

* Run selenium tests, preferably in parallel
* Be triggered by Github pull requests and git pushes
* Have an easy to use UI to see breaking builds
* Have easy integration to email, HipChat, and Github

## Tools:

* [Travis CI](http://travis-ci.com/) - I used them over CircleCI because Travis seemed to have more industry adoption and also had a better UI and documentation.
* [Sauce Labs](https://saucelabs.com) - The leader in Selenium Grid SAAS, they also do a lot of active development on open source Selenium projects such as [Selenium Builder](https://saucelabs.com/builder), which is cool.
* Ruby/Rspec/Rake - Wanted to use a language that had strong automation tools around it and was low on verbosity, yet still easily readable, so we went with Ruby and company.
* Of course, there are many, many alternatives to Travis and Sauce (I actually started this project using CircleCI and BrowserStack), however, I chose Travis and Sauce in the end because they had more documentation and were easier to use.

## Setup

* (Optional) Use [The Selenium Guidebook](http://davehaeffner.com/selenium-guidebook/) to setup a framework for your Selenium Tests, and to learn how to write maintainable tests. Make sure all the tests run on your Cloud Selenium tool you plan on using (Sauce or BrowserStack) before going forward. 
* Make an account with TravisCI, and turn on the repo that you want to set up a build server for.
* TravisCI will automatically hook into Github events so that it will trigger a build on pull requests and pushes. It uses a .travis.yml file in the root of your directory to figure out how to create your build server.
* Configure your .travis.yml [so it builds your server properly](http://docs.travis-ci.com/user/build-configuration/). For example, in our travis.yml file, we clone our puppet manifest and then use puppet to create our webapp server and handle package dependencies, virtualhost files, random config files, and starting the services.
* Once the server is built properly, you can use [Sauce Lab's Connect](https://saucelabs.com/docs/connect) feature to run Selenium Webdriver test on Sauce against your build server. Unfortunately, how this all works is not adequately covered in the Sauce Labs documentation, so bear with the magic ([this](https://saucelabs.com/images/docs/sauce-connect/sauce-connect-architecture.jpg) is literally what Sauce Labs gives you for documentation).

## Debugging Your TravisCI Build Server

If you're having trouble creating a working build server, you can email [support@travis-ci.com](mailto:support@travis-ci.com) nicely and they will allow you to setup a debug build server for you to log into to test things out. However, according to their support team, running a [Vagrant VM](http://www.vagrantup.com/) using the default [precise32 ubuntu image](http://docs.vagrantup.com/v2/getting-started/index.html) is very close to their current setup, so consider that as an option as well.

I highly recommend using Puppet to simplify your build process. Puppet is also useful outside of setting up CI as it allows you to easily configure many servers quickly (for example, adding a new virtualhost file to 10 servers in one shot), and does it in a way that is maintainable and version controlled.

Even with all of these useful tools, it took me a good couple of days to get the build up and running, so don't be discouraged by how tedious it may seem. The only way to really debug a build server at the moment seems to be to make changes, rebuild the server, see if the build goes farther, and then repeat until everything is working as expected.

## Links

* [The Selenium Guidebook](http://davehaeffner.com/selenium-guidebook/) - a very helpful e-book on how to write maintainable selenium tests.
* [Puppet Cookbook](http://www.puppetcookbook.com/) - I used puppet to configure the build server after it boots up.
* [Sauce/Travis Integration Guide](https://saucelabs.com/opensource/travis) - official Sauce Labs guide on integration
* [Quora: What are the alternatives to Travis CI?](http://www.quora.com/Travis-CI/What-are-the-alternatives-to-Travis-CI)
* [Rainforest QA](https://www.rainforestqa.com/) - An interesting concept that we looked into briefly in the beginning, but decided we wanted tests to be run more frequently than could be done by manual testers.

## Weird things I ran into

When sauce labs tells you to insert the following into your travis.yml:
    curl https://gist.github.com/santiycr/5139565/raw/sauce_connect_setup.sh | bash
It should actually be
    curl https://gist.githubusercontent.com/santiycr/5139565/raw/sauce_connect_setup.sh | bash
Otherwise, you'll get a strange "Connection refused" error.

Trying to load a second private repo in your Travis build server will result in a "Repository not found" or "Authentication failed" error which can only be fixed using [this obscure support article](http://docs.travis-ci.com/user/travis-pro/).
