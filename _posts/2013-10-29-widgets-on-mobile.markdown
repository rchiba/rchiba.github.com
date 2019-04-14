---
layout: post
title: Building Responsive Widgets for Mobile
description: A getting started guide for building mobile responsive website components, aka widgets. Tips and tricks.
tags:
- code
- professional
status: publish
type: post
published: true
meta:
  _edit_last: '1'
---

## Introduction
Building for mobile is challenging. Building widgets is challenging. Building widgets for mobile is especially challenging. Since the release of Tint ten months ago, we've iterated our widget loading strategy a number of times. First, we started out with a straight iframe embed that we put on our first customer's sites. That's when we realized our first mistake: assuming that iframes work in every browser. It turns out that mobile browsers have serious differences with desktop browsers in rendering iframes. Below is a description of how iframes are handled on each platform, and the strategies we use to make sure things render correctly:

## How iframes load on desktop, iOS, and Android

![iOS vs Desktop Mobile iFrame Rendering](/images/2013-10-29/composite.png)
[Link to the fiddle](http://jsfiddle.net/YWhXg/5/)

* *Desktop*: Iframes are constrained by their defined height and width. Any overflow is contained using scrollbars.
* *iOS*: Iframes are NOT constrained by any defined height and width, and are sized instead by the size of the source's content. Overflowing content extends past where you would expect it to, causing havok to page layout. The strategy we took here is to have JavaScript installed on the parent page that communicates to the widget the dimensions of the iframe. In addition, we surround the iframe with a containing div with the CSS attribute "webkit-overflow-scroll:scroll" which is an experimental iOS Safari attribute that tells the mobile browser to allow any overflowed content within the container div to be scrollable. This technique was developed through trial and error, as there is very little literature about the best way to build widgets on mobile because, let's face it, there aren't a lot of developers doing such things.
* *Android*: Iframes are NOT constrained by any defined height and width, like iOS, however, the "webkit-overflow-scroll" property does not work for the Android browser. Thus, the container div just cuts off the iframe's overflow content. To get around this, we created an auto-extend feature for our widget which reverses the dimension communication so that the widget sends messages to the parent page to tell it what size the container div should be. That way, the container div sizes correctly to the iframe, so that at least there is no clipping of widget content.

## Performance on Mobile

Performance bottlenecks are more pronounced on mobile because of a number of constraints including: slower JavaScript evaluation, increased latency, and lower limits on the of simultaneous requests a browser can make. Therefore, it is key that a widget as large as ours keeps these factors in consideration. Here are some things that we've done to keep things smoother on mobile:

* Our ``<script>`` tag uses the "async" flag so that browsers do not block other items on the page due to our script (which can take longer to load due to latency, even with a CDN)
* Our widget loads fewer posts than our desktop widget to reduce the number of image requests that need to be made on render.
* We test our widget on mobitest.com to make sure our waterfall chart stays as short as possible

## Resources

* [Advanced Widget Performance Optimizations - Meebo Bar Team](http://www.slideshare.net/marcuswestin/meebo-performance-nywebperformance-6461496)
* [Strategies for Iframe on iPad Problem](http://dev.magnolia-cms.com/blog/2012/05/strategies-for-the-iframe-on-the-ipad-problem/)
* [Steve Hannah's Blog Post About Iframe issues](http://sjhannah.com/blog/?p=218)
* [Stack Overflow - webkit overflow scrolling touch broken in ios7](http://stackoverflow.com/questions/18736297/webkit-overflow-scrolling-touch-broken-in-ios7)
* [Apple Forums - iOS and webkit-overflow-scrolling broken](https://devforums.apple.com/message/885616#885616)