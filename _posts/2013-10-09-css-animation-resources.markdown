---
layout: post
title: CSS Animation Resources
description: A collection of useful tutorials on css transforms and translations.
tags:
- Code
- professional
status: publish
type: post
published: true
meta:
  _edit_last: '1'
---

I was learning the details of CSS animation/transition at work as I was building our new Waterfall theme, which involves some fancy infinite scrolling animations and thought the following resources were the most helpful. I'm still not sure how I'm going to get this compatible with the old IE's. I'm likely going to have to tack on a JavaScript animation library as an IE fallback since I really want this theme to start appearing on websites.

## Resources

* [Controlling CSS Animations using JavaScript](http://css-tricks.com/controlling-css-animations-transitions-javascript/) by Chris Coyier
* [CSS Animations vs Transitions](http://www.kirupa.com/html5/css3_animations_vs_transitions.htm) by Kirupa
* [Looping a CSS Transition](http://www.kirupa.com/html5/looping_a_css_transition.htm) by Kirupa
* [All you need to know about CSS Transitions](http://blog.alexmaccaw.com/css-transitions) by Alex Maccaw

## Summary
* CSS Transitions and CSS Animations can do the same things, but have quirky differences: 
* Transitions are easier to use when JavaScript needs to be used to change animations based on user interaction.
* Animations are easier to use if animations require no JavaScript intervention [easier looping, better keyframe control, does not need a trigger).
* Getting and setting the current animation state of a CSS Animation requires [a setInterval counter hack](http://css-tricks.com/controlling-css-animations-transitions-javascript/), but is easier for a CSS Transition.
* Forcing GPU acceleration [using _transform: translate3d(0,0,0)_) may improve performance, but depends on the browser and machine.
