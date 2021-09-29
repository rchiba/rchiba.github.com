---
layout: post
title: How we Grew Topic - Retrospective (2019-2021)
description: Our company, Topic, was recently acquired by CafeMedia. How did we get here?
tags:
- professional
status: publish
type: post
published: true
meta:
  _edit_last: '1'
---

Our company, Topic, was recently acquired by CafeMedia. How did we get here?

### TL;DR
👋 Sold previous company ([tintup.com](https://www.tintup.com/)) in late 2018 <br />
🤝 Decided to bootstrap next venture with TINT cofounder, Nik<br />
😕 Spent 2019 building an SEO A/B testing product that failed to get traction (Apparatus)<br />
🤔 Pivoted to a content optimization product ([usetopic.com](https://www.usetopic.com/))<br />
📈 Grew business to 250+ customers over course of next 2 years<br />
🙌 Acquired by [CafeMedia](https://cafemedia.com/) in September 2021

The past three years have been a blur, I haven't taken the time to do as much documenting as I used to do, either in my notebook or on the blog. So in the next few paragraphs I aim to catch up on lost time and summarize what's been going on for friends and family in the present and for myself in the future.

So let's get in the time machine and zap ourselves back to 2019...

## Started from the top, now we're at the bottom

[In August 2018 we sold TINT to Filestack](https://ryochiba.com/2018/09/20/my-farewell-to-tint.html). For the three months after acquisition we focused on training their team to take over our business. After that, we were all on our own for the first time. No company and no team. Officially back to square one. 

Just like we wanted, we were starting new journeys. Tim started a deserved break from the myriad of burdens involved in being the CEO of a plateauing SaaS business. And Nik and I, somewhat shielded from those burdens and with the energy to continue the startup momentum, started considering our next moves.

Nik and I had informal conversations about what we'd be working on next. I think the two big ones were some sort of HR/Ops software like Rippling or an SEO tool of some sort for content marketers. Below is a slide deck that I made in October describing my thoughts on a potential opportunity in the content marketing space:

<iframe src="https://docs.google.com/presentation/d/e/2PACX-1vQ6uRFpPB0jU5JHex1FqtRHiz-DigQ-bX5vEYYY9qEDLxHj9dIFN6C7IDpX_u_3uhxZqnjXEt7B9Iww/embed?start=false&loop=false&delayms=3000" frameborder="0" width="560" height="315" allowfullscreen="true" mozallowfullscreen="true" webkitallowfullscreen="true"></iframe>

["Thoughts on SEO and Content Marketing", Oct 2018](https://docs.google.com/presentation/d/e/2PACX-1vQ6uRFpPB0jU5JHex1FqtRHiz-DigQ-bX5vEYYY9qEDLxHj9dIFN6C7IDpX_u_3uhxZqnjXEt7B9Iww/embed?slide=id.g44cc63d2a8_1_14)

We ended up picking SEO/Content Marketing and going down that path first. The logic being that it's an adjacent space to social media marketing (to avoid any potential non-compete issues) where we could leverage our familiarity of the customers and personas. And where we could leverage the knowledge we gained while growing TINT with SEO to provide value to others.

## A year of experimentation

We started things off simple. Extending the "advisorship" period with Filestack, we continued to do SEO consulting for them with the goal of learning pain points we could tackle. They referred us to other companies within the Scaleworks portfolio, we sought out consulting clients via our own networks, and soon we had enough consulting work to need to meet up everyday to work. 

The consulting consisted designing and conducting optimization experiments on clients' existing content libraries, and reporting back on the success/failure of these experiments. The good thing was that we could reliably increase organic traffic with our bag of tricks. The bad thing was that reporting the numbers and writing content for these experiments was taking forever. But the bad thing was actually a good thing because the whole point was to feel the pain and then solve it with software.

Our first stab at productizing this pain was Apparatus: an SEO A/B testing solution to make reporting to these clients easier. By integrating with Google Search Console and analyzing the data with a statistics library called Causal Impact, we could say whether the traffic gains on a group of pages was because of our hard work.

We thought it was a great idea because it would:
1. Enable SEO's to run more experiments, which would lead to more growth.
2. Also help them look good for their bosses at the same time via the statistical analysis. Which in turn would help them get more buy-in to run more experiments.

We spent a lot of time developing this product. We re-built the Google Search Console interface and added more features, built infrastructure to ingest enterprise-size traffic/keyword data, and even started building advanced tools to be able to make scalable changes to pages via CDN edge workers through our platform. 

Below is a video demo of the product we spent a year creating:

<iframe width="560" height="315" src="https://www.youtube.com/embed/JoN_6FqKwFU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

[Demo of Apparatus A/B Testing Tool](https://www.youtube.com/watch?v=JoN_6FqKwFU)

And we spent a lot of time developing relationships. We worked our network and took many, many coffee meetings with SEO's at lots of big and small companies in the city. Companies like EventBrite, Hired, Williams Sonoma, OpenDoor, CreditKarma. A few of them experimented with what we built and a handful even paid us for it!

Things seemed to be going reasonably well. Nik and I even took a trip to Mexico City to brainstorm and hack on new ideas.

But after a year's work, we were starting to hit a wall. The biggest challenges we faced were that:

1. SEO experts at larger companies had their own bespoke internal tools or processes that overlapped with Apparatus. And they were hesitant to drop years of work invested into those tools and switch to a nascent startup.

2. SEO experts at smaller companies had more pressing priorities, the SEO equivalent of five-alarm fires, and either didn't have enough pages to optimize, or the optimizations wouldn't have yielded results as big as solving those fires.

Our target persona looked like it was companies that were sophisticated enough to have a growth marketer on their team, with enough bandwidth for constant experimentation, who had not yet built out the infrastructure needed for them to do their work efficiently. And as we took more meetings, we started to see that target persona shrink in size and get further away. 

With no plans for distribution, we started to pull away from Apparatus and go back to the drawing board to consider other ideas.

## The pivot: content optimization

For us the drawing board consisted of our consulting experience and thinking back to parts of what we were doing and automating those tasks. If automating the reporting wasn't going to work, how about automating the content optimization?

To optimize our clients' content, we were doing a variety of things, including title/description modification, improving the above-the-fold experience, but most importantly adding additional content to make the articles more comprehensive. The latter was what took forever, actually figuring out what was missing from the article based on all of the other articles on the page.

So, we decided to tackle that next. Our goal was to build a prototype of a product that could speed up that process and see if we could build something that our clients could use themselves, cutting ourselves out of the process.

In contrast to SEO A/B testing market, we discovered that there was significant activity in the space. The largest being MarketMuse, a company that started as a smaller tool, took funding, and grew to service enterprise-level clients. As MarketMuse started moving upmarket, others like Clearscope, Surfer, and Frase were picking up the mid and smaller markets. All were growing rapidly. This excited us, because it validated a demand we had been starved of for a year. 

A rising tide was lifting all the boats, and we wanted to build a seaworthy vessel.

We hungrily hashed out our first prototype, meant just for our consulting clients. Admittedly, it was largely an amalgamation of our favorite parts of the other tools, with a few improvements sprinkled in.

As we tested with initial users, we got valuable feedback that helped us chart the product development direction we needed to differentiate our tool from the pack.

Looking back, do I regret wasting a year on a failed product? Yeah, of course. But there were some good things that came out of it. We were able to transition a few of our Apparatus customers to become our first Topic customers. Nik and I brushed up on our technical skills which had atrophied during our time as managers. And most importantly, it helped us get out of our shells and more comfortable pitching and selling. 

## Hustling for initial traction

With a new product and a new target persona, we set to work drumming up business. From experience, I know that this is a time where it's a lot of throwing things at the wall and seeing what sticks. My personal philosophy is that rapid experimentation is superior to attempting to come up with a perfect master plan.

So throw we did.

*(As an aside, I want to give a shoutout to [Jordan Crawford](https://www.linkedin.com/in/jordancrawford/), our growth advisor. He was our sounding board for almost all of the initiatives listed below. The energy he brought to our meetings helped us push through these most challenging times where seemingly nothing was working. Also, shoutout to [Yuriy Yarovoy](https://www.linkedin.com/in/yuriyyarovoy/), our second growth advisor)*

### What didn't work for us?

**Cold Outreach**: We spent months attempting various clever ways of creating an outreach campaign that included all the best practices. Highly segmented lead lists, adding value in every email, automated connections on LinkedIn. But in the end we weren't able to make it work. We just weren't skilled enough to make our outreach stand out and get leads to act.

**Paid Social**: We created campaigns for LinkedIn, Facebook, Instagram. A few campaigns may have paid for themselves, in particular a re-marketing campaign on LinkedIn. But ultimately this was not a channel that stuck.

### What worked for us?

**Reddit**: In the very, very beginning when one or two qualified leads a week would have made a difference for us, there was [one reddit post]((https://www.reddit.com/r/bigseo/comments/djrkw1/clearscope_alternatives_for_content_writing/)) that helped us start our flywheel. It was a post asking for alternatives to a competitor. We asked our advisor to write his experiences with our software on it, which got the attention of the OP, when then tried our software, switched to it, and edited the post to mention us. 

**SEO and Competitor Content**: The paid search helped us discover which keywords to build organic content around. In parallel, we built backlinks via all sorts of methods, from guest posting, working with agencies, and building a free table of contents tool that had a small backlink credit to us.

**Free Tools**: And speaking of tools, we were able to build a few unique tools that served as backlink magnets as well as lead generators. This is one of the best examples of us "using our strengths" because as a product-focused founding team it was easy (and fun) to build these simple tools compared to our competitors who either were too busy doing more important things or did not have the skills to invest in this area.

## What was essential for us?

**A Great Product**

Our product was always a foundational part of our growth. We had a couple of patterns that helped us keep iterating and keep the feedback loop tight. 

The first was a 2 week follow-up call to review the customer's experience and see how our product could be improved. This all-purpose meeting was product/marketing research and case study interview rolled into one. If they had a bad experience, their subjective experience helped us fix points of friction. If they had a great experience, we could take notes and turn their story into a testimonial, review, or case study. And no matter what, them describing in their own words the problems that their product was solving for them helped shape our marketing language.

The second was an in-app chat that we designed to look and feel differently than the typical default "Intercom" style chat widget. It has a dedicated spot in the navigation and hovering over shows our faces. In addition, I'd encourage users to use this button at the end of demo calls and let them know they'd be getting personal service from me or my cofounder. These little touches encouraged our customers to start valuable conversations with us.

**Customer stories, reviews, case studies**

This is where our experience at TINT came in. At TINT our mission was to help businesses tell authentic stories through their customers. We spent a lot of time helping them surface testimonials through social and knew the power of real success stories from trustworthy sources.

The 2-week follow up call allowed us to collect these stories on an ongoing basis and I worked to turn them into marketing assets of all shapes and sizes. With the customer's permission, the calls were recorded and transcribed using Descript, which I would then highlight for eventual use on the marketing site.

**Video intro to product**

Pretty early on, I worked to add videos of myself within the marketing and product to educate leads about our product and customers on how to use the product. I'm pretty proud of our use of video and although I can't measure it, I believe it had significant positive impact on our growth.

<iframe width="560" height="315" src="https://www.youtube.com/embed/D4tW9IA8zjQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

[Topic Explainer Video](https://www.youtube.com/watch?v=D4tW9IA8zjQ)

How did the videos help? They allowed us to:

**Differentiate from Competitors**

SaaS companies are a dime a dozen, especially in MarTech there are thousands. And in especially competitive niches like SEO it's especially important to find ways to stand out. One way is to put your face out there in a video. Making a live-action video of yourself explaining the product has multiple barriers that keep it from being commonplace. You need to be comfortable in front of a camera, have a decent background and lighting, know how to use video editing software, speak fluent english, etc. So when people see a video there's an extra level of legitimacy that casts a positive light on your product and company.

**Build Relationships**

The videos give me a head start on demo calls because they've already seen me and heard me. People want to buy from people they trust, and establishing the relationship through multiple interactions allows them to see that this isn't just a fly-by-night faceless software company. They realize that by subscribing, they not only get a great product but also a great team to help them use it.

**Improve Retention**

Videos make great educational assets to use in onboarding drip emails and within the product. Any software, no matter how simple, can benefit from a video explaining how to best use it. Even if customers are using it the right way, they can get value in getting validation that they're not missing anything important. Customers must reach the point at which the value "clicks" for them or else they'll leave. Videos help get more of them there.

*A quick shoutout here to a personal marketing video hero, [Patrick McGrane](https://www.linkedin.com/in/patrickmcgrane/) over at SpyFu. I love his product marketing and user education videos. They're a wonderful combo of being both succinct, but also so full of personality. If you're looking to get inspired, check out the [Spyfu Support Center](https://help.spyfu.com/en/).*

### A few growth lessons learned

**Focus on strengths, not weaknesses**

A pattern emerged in the kinds of marketing activities that yielded the greatest benefit. Most of the ones that involved engineering and design did better than the ones that involved sales. Our free tools were a great success whereas our cold email campaigns completely flopped. We're just much better at building tools than we are at writing cold email pitches. If I had to go back and do everything over again, I'd feel less guilty about not focusing on things that I knew weren't our team's personal strengths. 

**Design, brand, and polish matters**

Cheap tools are a dime-a-dozen but polished tools are much rarer. My guess is that it's because it takes a certain level of technical skill to achieve the last 20% of polish and the vast majority of people with that skill level are typically working prestigious, high-paying jobs at reputable companies.

It's important to aspire to and (at least partially) achieve a high level of polish on the marketing and product. Why? Because the most valuable category of customer cares about this. One way to understand the market is to categorize customers on a spectrum of value-consciousness. On one end are customers that value the cheapest tool, and on the other side are those that value the best quality tool. There are tradeoffs to focusing on one type of customer vs the other, but I personally prefer going after quality-conscious customers because they typically get more value out of the tool over a longer period of time. That means higher contract values, less churn.

## Slow, somewhat steady growth

![Topic MRR](/images/2021-09-28/topic_mrr.png) 

All of the above efforts eventually and incrementally created the growth that we needed to jumpstart the business.

From the start of 2020 to mid 2021, we went from being largely unsure of what we were doing to feeling genuinely proud about what we've built. I wouldn't say that there was a pivotal moment where we hit product-market fit. It was a gradual ease into higher and higher degrees of fitting. A steady progression as we added features here, trimmed features there, grew our legitimacy, and got more positive comments from users.

It was at this stage in the business that I got to experience two fun things that I had previously seen from my TINT journey: evangelists and copycats.

**Evangelists**

![Topic testimonials](/images/2021-09-28/evangelists.png) 

Once you build something that's meaningfully useful, there's a point when a few customers take it upon themselves to help you succeed. I can only speculate as to their motivations, but every single one of them comes from a place of generosity. We wouldn't have been able to make progress without them.

They were our partners in helping shape our product and understand our target audience as a whole. 

And they took it upon themselves to share our product to their networks. 

In exchange, we did our best to prioritize their needs and wants in the product. To be available for them and share our knowledge when we could. 

For me, this is one of the most rewarding parts of the experience: Working with groups like this, people who are invested enough as users of the product to actually spend valuable hours of their time to help you shape it.

**Copycats**

Another thing that happens when you've built something that's meaningfully useful is seeing the emergence of copycats. 

I have no moral opposition to teams that take inspiration from other products, even when initially the inspiration may be close to identical (obviously as long as no laws are broken and work is done in good faith). Because everyone starts somewhere. And competition is how better products are made. 

The best teams quickly find ways to differentiate anyway given the necessary pace of innovation in marketing technology. 

I found it flattering when the first copycats of our product started appearing. The one that stands out the most to me was Postspace, mainly because of their very similar About Us page. In an odd way I felt connected to them, as if their founders were in a parallel universe doing the same things we were.

![similar_about_us.png](/images/2021-09-28/similar_about_us.png) 

## Bigger deals, pilots

As the product started fitting better with the market, the conversations around it gradually changed within our target market. Below is a screenshot comparing how our tool was seen in early 2020 vs early 2021:

![topic discussion 2020 vs 2021](/images/2021-09-28/topic_discussion.png) 

This shift was the tipping point to start to see larger deals and pilots with enterprise-sized companies. In order for larger organizations to take a risk on your team and technology you need to be vetted, and the decision-makers need to have heard your name from various trusted sources.

## Offers, deals, selling the company

There are two oft-repeated pieces of advice regarding selling a company:

1. The best time to sell is when you don't want or need to.
2. Companies are bought, not sold.

The advice rang true as out of the blue we found ourselves with a few inbound deals to consider.

Neither of us wanted to sell the company, it was growing, we enjoyed working with our customers, it gave us a generous amount of flexibility, and a satisfying amount of ownership. This was paradoxically what led to a strong position at the negotiating table. In our heads we were willing to walk away from an offer, but were also curious about where we could take the negotiations. 

After we had reached the terms of a deal, we found ourselves looking back on the situation and feeling that "the stars had aligned". As in, we were the beneficiaries of dumb cosmic luck. Especially given our previous TINT experience where we had to actively seek out buyers in the final year of the business.

However, in reality this result was the outcome of a series of actions we took many months before when we were crafting our product. Yes, there was some luck involved, but we would not have been able to seize on the opportunity had it not been for all of the trial and error, failed experiments, and dead ends. 

That being said I'd do a few things differently next time to make this more likely to happen. Most importantly, the experience highlighted the value of setting up partnerships and pilots with potential acquirers. That is to say companies where 1+1=3. Large companies in adjacent spaces where they or their customers could benefit from the product. In any given space there might only be a handful, but they're worth reaching out to in order to start a relationship.

Our mistake was that we did not feel comfortable reaching out to these big companies because we felt like we needed more credibility and felt the pressure of needing to send the "perfect" email, so much so that we never took action. It wasn't until we had validation from the inbound deals in hand that we actually started reaching out. This time feeling no pressure, we wrote casually and were surprised to get responses. Of course having a deal in hand was a big a factor in getting these responses, but next time I want to get over imposter syndrome and just do it.

## What's next

One of the most exciting parts of the deal with CafeMedia is the chance to make a bigger impact.

Hundreds of customers use our tool everyday to optimize thousands of articles. But CafeMedia has an order of magnitude more customers and content. By tapping into their business, we can bring our technology to the widest possible audience. 

Their (and now our) mission is to allow everyone to earn a living through their content. Nik and I will be spending the next few years helping them make that happen. In the short term, they've already integrated Topic into their product. The next steps are to tailor Topic to fit their specific customer base, independent publishers and bloggers.

It's been a wild journey to get to this point, but the work is just starting.

![Ryo Chiba and Nikhil Aitharaju](/images/2021-09-28/ryo-and-nik.jpg)

