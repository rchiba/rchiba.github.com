---
layout: post
title: SF Selenium Meetup Talk
description: A talk I gave on Dec 16, 2015 for the "White Lightning" talks for the SF Selenium Meetup. These slides describe the tips and techniques we used to get a green selenium build for our startup of 30 people. 
tags:
- selenium
- software
status: publish
type: post
published: true
meta:
  _edit_last: '1'
---
<p style="text-align:center;">
<iframe width="560" height="315" src="https://www.youtube.com/embed/Ps9SORiEOO4?rel=0" frameborder="0" allowfullscreen></iframe>

<iframe src="//www.slideshare.net/slideshow/embed_code/key/i7dVzWQhoFDdXm" width="595" height="485" frameborder="0" marginwidth="0" marginheight="0" scrolling="no" style="border:1px solid #CCC; border-width:1px; margin-bottom:5px; max-width: 100%;" allowfullscreen> </iframe> <div style="margin-bottom:5px"> <strong> <a href="//www.slideshare.net/RyoChiba/selenium-meetup-dont-give-up-a-startups-selenium-story" title="Selenium Meetup: Don&#x27;t give up. A Startup&#x27;s Selenium
Story." target="_blank">Selenium Meetup: Don&#x27;t give up. A Startup&#x27;s Selenium Story.</a> </strong> from <strong><a href="//www.slideshare.net/RyoChiba" target="_blank">Ryo Chiba</a></strong> </div>
</p>

1. Hi, my name is Ryo and I am a Cofounder and Co-CTO at TINT, a 35 person company that has a green selenium build. I’ve been a big advocate of selenium at our company and I want to tell you how we went from no test coverage to green selenium build and almost gave up on the way.

2. So, let me give you a quick background. At TINT, we make social media display software. A year and a half ago, we were 5 engineers and were closing deals with our first large customers. This is a picture of one of our first, the mall of Dubai!

3. The problem was, our software failed on a weekly basis due to our everyday deployments with no test coverage. You can guess that it resulted in A LOT of angry phone calls. With our product, you can only make a couple mistakes before your customers leave. Our company was teetering between failure and success, and instability was a make-it-or-break-it concern. This is when I started on our yearlong journey to a green selenium build. 

4. When we started, our team had no resources or domain experience with selenium. We started out writing Selenium IDE tests, but were not able to integrate them into our workflow because they required so much time to supervise. We switched to ruby selenium webdriver and rspec, and were able to make progress, but we still felt like were not doing things the right way.

5. We almost gave up. Maybe selenium wasn’t worth all of the trouble after all.

6. We started asking questions, and here is what got us over the hump. First, we found The Selenium Guidebook / Elemental Selenium by Dave Haeffner, we read this and it allowed us to organize our tests, but more importantly, help us feel confident that what we were doing wasn't foolish. Secondly, we met Neil Manvar at Sauce Labs through a mutual friend. Neil brought a lot of domain knowledge and more importantly provided emotional support in letting us know that selenium was not flaky and in fact we had written our tests poorly. It just goes to show the value of working your network!

7. We had no CI server, and were running tests manually. When that got too painful, I embarked on setting up a CI server. For about a month I spent time trying to get our unique Ruby on Rails / PHP environment working on Travis, Circle, and Codeship CI. I failed every time trying to get both apps running on the same server on these CI as a service solutions. 

8. We almost gave up. Maybe selenium wasn’t worth all of the trouble after all.

9. Luckily, we discovered a couple things that got us over the hump. We stepped back and realized we were using the wrong tool for the job. Instead of using CI as a service solutions, we set up a TeamCity server that allowed us to customize how our environments are set up. Once the build was up and running, we noticed that it was still flaky. We wrote a custom re-run script that re-runs tests that have failed. This change took our build from an unusable 50% flakiness to a usable 10% flakiness. Once we had a consistently green build, we noticed that developer’s weren’t paying attention to it, so we integrated github with team city so that selenium builds would kick off automatically and developers would be reminded that they need to have a green build before merging any pull requests. Turning this on took developer participation from about 30% to 100% instantly. All of these tasks were small things we put off for a long time, but when we finally got around to implementing them, we wondered why we hadn’t done them sooner because of how much value they added for us. And although they don’t relate directly to selenium, they were essential in getting us to use it.

10. When we started, we had very little developer participation in writing selenium tests. Nobody remembered to write selenium tests with this PR's, and setting up your environment to run a test was cumbersome. After all, in order to write or debug a selenium test, we would have to shell into a machine, set up a sauce labs tunnel, run our tests, and watch it on the sauce labs viewer. Debugging a selenium test on sauce labs was nearly impossible. We reached a point where maybe there was too much pushback on the team to make adequate integration test coverage a reality.

11. We almost gave up.

12. But, we discovered a few key things that got us over the hump. I started nudging people in code reviews and letting them know PRs would not be accepted without integration tests.Others started to enforce this rule and we began to build up coverage. We wrote a script to make it easy to run a selenium test locally with a single command. We set up an unlimited sauce plan to run concurrent tests without worrying about utilization costs. These small behavioral nudges added up in making writing selenium tests a habit rather than a chore.

13. I want to share a quote from my best friend from high school who is now a software developer at Slalom Consulting. We were hanging out and we naturally started talking about Selenium, and he said “We had a selenium suite, but it was flaky so we stopped using it.” They gave up.

14. We almost gave up. But we didn’t! We spent a year working on our build on-and-off, almost giving up. And now we’re able to reap the benefits of our green selenium build. The best practices might sound like it wouldn’t make a big difference. My one message to you is: **Don’t give up.**
