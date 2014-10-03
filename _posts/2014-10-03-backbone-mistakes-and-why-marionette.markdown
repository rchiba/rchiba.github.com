---
layout: post
title: Backbone mistakes we made, and how we solved them with Marionette
description: Don't make these mistakes we made, improve your codebase by avoiding these backbone pitfalls.
tags:
- code
status: publish
type: post
published: true
meta:
  _edit_last: '1'
---

![Yes, that is a 3500 line module](https://s3.amazonaws.com/uploads.hipchat.com/38181/267094/nF1XsGwJmQU4LGu/Screen%20Shot%202014-09-18%20at%2011.04.24%20PM.png)

3500 lines of debugging hell. Yes, if you look closely above at the list of JavaScript files that make up [Tint](http://www.tintup.com), you will see that I have indeed helped write a 3500 line Backbone module. In terms of code, a verbose behemoth. In terms of maintenance, a costly reminder of what happens when you keep tacking on features without thinking about the "big picture". Yeah, I'll say it: architecture.

> "The secret to building large apps isnever build large apps. Break yourapplications into small pieces. Then,assemble those testable, bite-sizedpieces into your big application" - Justin Meyer, author JavaScriptMVC

I'll be the first to admit my failures. But I hope that also means that I'll be the first to learn from them. Over the past year, I helped write a backbone app that started out as a free widget to powering a display in Times Square. The rapid growth in customers and increasing demand for key new features helped accelerate an already growing amount of technical debt. As we tacked on new feature after new feature, things got complicated. Eventually, we reached a point where we all agreed that a refactor was in order.

We chose to refactor using Marionette because we were already familiar with Backbone's patterns and figured that it would be an easier learning curve. Sure enough, after 3 weeks using Marionette to refactor Tint Analytics, we've gotten up to speed. We have identified some key Backbone mistakes we made that Marionette helps us handle. Here's a list of Backbone pitfalls and how Marionette works to help us avoid them.

## Views containing too much logic

In Backbone, there are only 2 kinds of objects: Models and Views. Models help connect to the API and serve to maintain state. Views do everything else. As you can imagine, this can lead to Views which start out small, but quickly grow. And since the library doesn't have any established pattern on how to handle composition, it's easy to have Views grow to an unmanageable size. Marionette helps us by extracting  Views into Controllers and Views, and encouraging highly composited architecture with the idea of Layouts and Regions. The Marionette Controller is in charge of view initialization and communication between subviews, acting as a Mediator.

## Not having enough Modularization 

This point also ties in with the above point of views containing too much logic. Because it requires a lot of boilerplate in Backbone to create composite views, it is too easy to hold off on creating lots of small views composed to create the larger overall view. Marionette helps by extending Backbone Views into ItemViews, CompositeViews, and LayoutViews. Marionette automatically takes care of accepting collections and iterating through models to create ItemViews, reducing the cost of composition and increasing modularization of view code.

## Forgetting to unbind events causing unexpected behavior and memory leaks

Backbone has no pattern or tool to help get rid of zombie views. Instead, it relies on developers to come up with their own solutions to unbind events. I relied on the [BaseView technique](http://stackoverflow.com/questions/7567404/backbone-js-repopulate-or-recreate-the-view/7607853#7607853) to make sure events were being unbound, but I always thought it was a little goofy for the library to not handle this automatically. Luckily, Marionette does. Marionette Controllers, Views, and Modules have [built in functionality](http://stackoverflow.com/a/22435769) to automatically unbind events. Yay!

## Interdependency through global variables

One conundrum that I encountered while building our large Backbone app was how to handle multiple views that share a model, or a view that needs to reference another view's model. I eventually ended up having a couple global state variables. The problem was, there was no way to figure out the parts of the code that were manipulating or reading the global. In addition, it was easy for the Backbone model and the global variable to become out of sync. Oy! 

Entities to the rescue. Marionette Entities are an additional abstraction that allows you to have clearly defined entry and exit points for your models, making them all both globally accessible and also well defined and easily debuggable. It also lets you easily implement functionality like making a model getter a Singleton or having custom model initialization. The best thing is that the View considers the Entity a black box and communicates to it via messaging, reducing unnecessary coupling.

## A giant router with all module initialization 

Almost [every](https://github.com/backbone-boilerplate/backbone-boilerplate/blob/master/app/router.js) [sample](https://github.com/backbone-boilerplate/backbone-boilerplate/blob/master/app/router.js) [app](https://github.com/ccoenraets/backbone-directory/blob/master/web/js/main.js) I've looked at for Backbone has a single router file. For simple applications, this works fine, but for larger scale application, the router can grow to be unmanageable. A large router is hard to read and maintain because it often times will be responsible for initializing unrelated Views and Models. Marionette helps solve this by distributing routing and initialization among marionette controllers. It allows you to define Model and View instantiation where you can find it later. 

## Conclusion

Overall, the codebase is looking easier to digest, although we still have much to learn. By not making the same mistakes we did above, you too will be able to avoid code hell, and instead, see something like this:

![yep, we gotta break filterbar down](https://s3.amazonaws.com/uploads.hipchat.com/38181/267094/ys9Dj2LTMeMb5RZ/Screen%20Shot%202014-09-18%20at%2011.22.21%20PM.png)


### Further Reading

* [Avoiding Common Backbonejs Pitfalls - ozkatz](http://ozkatz.github.io/avoiding-common-backbonejs-pitfalls.html)
* [Backbonejs Tips and Patterns - Smashing Magazine](http://www.smashingmagazine.com/2013/08/09/backbone-js-tips-patterns/)
* [Why should I use marionette - Derick Bailey](http://lostechies.com/derickbailey/2012/06/13/why-should-i-use-backbone-marionette-instead-of-%E2%80%A6/)
* [Patterns for Large-Scale JavaScript Application Architecture](http://addyosmani.com/largescalejavascript/)
