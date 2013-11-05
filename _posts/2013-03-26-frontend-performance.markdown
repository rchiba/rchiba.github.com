---
layout: post
title: Frontend Performance
tags:
- Code
status: publish
type: post
published: true
meta:
  _edit_last: '1'
---

After happening on [Ilya Grigorik's blog](http://www.igvita.com/) where he writes about his work with the Make The Web Fast Team at Google, I found [a great talk on web performance](http://www.igvita.com/2013/01/15/faster-websites-crash-course-on-web-performance/). Here are some notes I've taken after watching the talk.

Key Takeaways

* Latency is more important than bandwidth in determining page speed.

* The average website is 1MB+ and requires 80+ different resources, yet the average RTT between client and server in the US can be up to 250ms (400ms on a 3G network). It seems like an impossible task to make one's site load within 250ms (which is the magic number at which you feel the response "feels fast")

* Currently Chrome uses 6 TCP connections per host, and stops at 6 because any higher and performance would start to go down due to TCP's "slow start" feature where the first request starts with a small congestion window and grows with each subsequent request.

* Mobile will surpass desktop very soon, but latency is even worse on mobile.

* GAQ can track page load time (and uses in-browser implementation of the W3C Navigation Timing spec), but defaults to sampling 1% of connections, so use the following to increase that: 

    <script>
       _gaq.push(['_setAccount','UA-XXXX-X']);
       _gaq.push(['_setSiteSpeedSampleRate', 100]); // #protip
       _gaq.push(['_trackPageview']);
    </script>
