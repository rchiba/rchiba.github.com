---
layout: post
title: The Mythical Man Month
description: Notes on how to improve software engineering processes.
tags:
- code
- professional
status: publish
type: post
published: true
meta:
  _edit_last: '1'
---

In 1975, Frederick Brooks wrote a book on software engineering that is still applicable today in 2014! That book is called [The Mythical Man Month](http://en.wikipedia.org/wiki/The_Mythical_Man-Month) and I found myself relating to many of the software-related scheduling and planning issues Brooks encountered almost half a century ago. Below are some of the key ideas I found the most compelling:

**Programmers are naturally optimistic and programming is a tasks that lends itself to optimism.**

Brooks argues *"All programmers are optimists... Perhaps the hundreds of nitty frustrations drive away all but those who habitually focus on the end goal."* which leads to a false assumption that engineering tasks will take only as long as it 'ought' to take. However, any software development effort usually consists of many tasks chained end-to-end. The probability that every single one of them will go well is almost zero considering the perfection necessary as a programmer. Considering the volume of nitty frustrations I encounter everyday I definitely relate to being an optimist and have observed others and myself misjudge how long things will take due to this optimism.

 **1/3 planning 1/6 coding, 1/4 component tests, 1/4 integration tests**

From my anecdotal evidence, this breakdown for how software time is spent is spot-on. Almost all of the engineering tasks that have been underestimated at our company have not taken into account the amount of time needed to properly test and integrate the system before it is production ready. Much of the reason is because we (the engineering team) are transitioning from "startup-mode" where we didn't need as adequate testing because we had fewer customers. More customers find more bugs, so our acceptable threshold for stability has increased. And with it, the effort spend testing. I've just recently started to integrate testing into my estimates and so far both quality of product is higher, and target completion dates are more accurate.

**The Mythical Man Month: More people doesn't equate to faster completion. **

Consider the following 2 graphs:

![communication overhead illustrated](https://s3.amazonaws.com/uploads.hipchat.com/38181/267094/zAKeWkVhgoYytet/Screen%20Shot%202014-11-01%20at%208.52.26%20PM.png)

![time vs number of workers](https://s3.amazonaws.com/uploads.hipchat.com/38181/267094/srHRc1jE6ip81YZ/upload.jpg)

The first one shows just how difficult it is to maintain communication among more than a few people. The second illustrates how many months a project will take given the number of people on a team. Organizing work around a complex task is difficult with more people involved. But just how much more difficult did not dawn on me until I saw it visually. This bolsters my belief that features should be owned by two people or less who serve as a hub for collecting the knowledge necessary.

**The Second System Effect: The second system you build will tend to be overengineered due to pent up desires**

We are in the  beginning stages of building parts of a second system, so we have not witnessed this yet. But after reading this chapter I will be more vigilant to make sure every part of a spec has solid business value, and to watch out for costly unimportant components.

**Better to extend the schedule than release a half baked product**

Brooks uses the analogy of an omelette as a delayed software project. You can either spend more time cooking it properly, turn off the heat and serve it raw, or turn up the heat and burn it. However, from my experience it is actually more effective to use less egg from the start. I actually disagreed with this point because you can better hit a target by removing non-essential functionality from a feature early on in the planning stages, which is a better alternative than extending the schedule or releasing a bad product.

**Conceptual integrity is the most important consideration in system design**

*"It is better to have a system omit certain anomalous features and improvements, but to reflect one set of design ideas, than to have one that contains many good but independent and uncoordinated ideas"*, Brooks comments, *"[the] ratio of function to conceptual complexity is the ultimate test of system design"*. This definition is great because it describes what distinguishes good code from bad. It also helps in clarifying the objective of certain processes we have at the office, like code reviews and pair programming. By collaborating and reviewing each other's code, we can hold each other up to high standards and maintain conceptual integrity.

An interesting example they brought up of conceptual integrity was the [WIMP](http://en.wikipedia.org/wiki/WIMP_(computing)) (windows, icons, menus, and pointing) interface of the modern GUI. I never much thought about it until now, but on further inspection, it is incredible how much can be done on a modern OS with such a simple concept (compared to typing commands in a terminal, as was computing before the GUI).

**Documentation is an essential tool that can be the difference between catastrophe and success**

A couple of months ago we started instituting a process where features are planned out using spec documents. It was a process modeled after what we were already doing informally: putting together a rough outline of how we were going to build things out so that we could get feedback on it. Over time, we've seen these documents come in handy, but only if the document has an owner, and only if effort is put into it to make it the canonical source of truth for anything related to the feature. This requires careful effort in not just making sure the spec covers all the details, but also in writing it such that it is easy to digest. I think the ability to write organized prose is undervalued among technical people, as this is essential in making sure a spec document delivers value.

**People don't set targets or write specs if they feel the organization will not see them as tentative.**

I liked this note because it makes sure we understand that specs are living documents and never to expect them not to change over time.

**Members of the team need to strive to be flexible because change is the only thing that's guaranteed.**

*"Structuring an organization for change is much harder than designing a system for change. Each man must be assigned to jobs that broaden him, so that the whole force is technically flexible. On a large project the manager needs to keep two or three top programmers as a technical cavalry that can gallop to the rescue wherever the battle is thickest."*

I truly believe that the last sentence applies to each member of the current engineering team and our aspiration is to make sure every member can be part of the "cavalry". It helps define who we are looking for technically as well, since we expect every member of the team to respond fast to changes in requirements, fast in both communication, understanding, and implementation.

**Program maintenance is 40% more than cost of development**

Cumulatively, I've spent a few months out of this year working purely on regressions and bug fixes. We need to always remember that maintenance is far larger than development. It is especially important as we build out features and make choices about technical debt and how much effort we're going to spend time on testing. Because a couple days spent on testing can save us weeks of time fixing bugs. And it results in happier customers!

**Bugs will naturally scale with time and customers**

![Bugs found per month vs months since installation](https://s3.amazonaws.com/uploads.hipchat.com/38181/267094/7uTzNFqiZFqihdZ/upload%20%281%29.jpg)

The more time customers spend with a product, the more bugs they'll find as they bump into edge cases. I've experienced this firsthand as well.
 
**Tooling - make effort to share and find tools. Unified toolsets can boost productivity.**

We definitely embody this both on the engineering and customer happiness teams at our company. Although, as we've grown it's become more difficult to get tool usage to be adopted company-wide. Finding and adopting great tools is something our company culture promotes.

**Disastrous schedule slippage happens one day at a time.**

The takeaway for this point is that it is essential to recognize slippage faster and communicate it clearly. One thing that I have found works is setting more granular targets that allow for more segmented estimation. Targets that are 1-2 weeks are less likely to be totally derailed than targets that span multiple months.

**Milestones need to be concrete and defined with 'knife edge' sharpness. On the flip side, fuzzy milestones are actually millstones that grind down morale**

I have seen this first hand, but wasn't able to pinpoint exactly what was causing the problem. I am glad to see the idea expressed in a way that presents the root of the problem clearly. Milestones need to be concrete. This is where having a test suite comes in handy, because tests either run green, or they don't.

**No silver bullet, software is inherently complex and no management or process changes can improve the inherent complexity.**

Yes.

**Closest thing to silver bullet is to buy not build**

We've been lucky to have the budget to buy and not build, and personally my preference swings towards buying instead of building for components just because maintaining your own system is expensive! I found it fascinating to hear someone from 40 years ago, before the existence of SAAS, say the same thing.

**Conclusion**

In conclusion, I think the book had a plethora of wisdom, a good amount of truisms, but allowed me to better form a framework that our existing engineering processes can call on for justification. For example, pair programming doesn't just make our code vaguely better, it establishes a consistent conceptual integrity. Why do we set concrete targets for ourselves? Because disastrous schedule slippage happens one day at a time. And how about removing that feature from Tint 2.0? Because of the Second System Effect! The reason why this book is timeless is because it's about people, not software, and as long as writing software is complex, people, not computers, will be the ones dealing with the complexity.

