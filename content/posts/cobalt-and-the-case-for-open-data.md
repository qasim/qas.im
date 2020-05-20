---
title: Cobalt and the case for open data
description: For the past year or so, I’ve been working on a platform for open data APIs centred upon the University of Toronto’s publicly available information.
date: 2016-03-14
sourceName: Medium
sourceURL: https://medium.com/@DrQas/cobalt-and-the-case-for-open-data-ec042aa5d84d
tags: []
draft: false
---

For the past year or so, I’ve been working on a platform for open data APIs centred upon the University of Toronto’s publicly available information. It’s called [Cobalt](https://cobalt.qas.im), and it’s a [web service](https://github.com/cobalt-uoft/cobalt) that lets developers get, search, and filter various university data-points to power their applications.

As I continue to make the case for Cobalt to my school, I thought I’d share why I think open data is important.

## Third party app developers

There’s a reason why governments are pushing their open data initiatives, and it has to do with what happens when you make data available to people outside of parliament.

Traditionally, and what has been happening at the University of Toronto, data is kept private (or at the very most, provided in a non-machine readable format) and then an in-house team of developers are hired to create apps and services that utilize it. The open data model continues to support this, but it lets any person on the planet create those apps and services as well through public APIs or machine-readable data dumps. This encourages technological innovation and if used in a school setting, lets students build great tools for peers.

Cobalt itself eliminates the barrier most people have when interacting with UofT data, which is finding elegant ways to scrape the school’s websites for data and perform queries over them. Instead, a community effort to build robust scrapers let’s the users focus on what they actually want to do: make a great app.

## Research and data analyses

One of the more compelling things open data can do for us comes from data science and research. Last year, the City of Toronto hosted [Traffic Jam](http://trafficjam.to/), a hackathon targeted towards using open data to build solutions to Toronto’s notorious traffic problems. This is a brilliant example of what easily accessible data for the masses can do for us.

Our school’s data holds secrets for new ideas, some of which we can’t even come up with yet. It can help populate training sets for machine learning algorithms, surface valuable building information exactly when we need it, or even map the movement of students across our campuses from lecture to lecture based on the time of day. A big part of why I find open data so fascinating is imagining what people will make with it.

## Historical datasets

As it is right now, when a new school year’s data is published, the previous year’s data becomes inaccessible to the public. Keeping historical datasets solve this: all of Cobalt’s datasets have a [full history](https://github.com/cobalt-uoft/datasets/releases) tracking every change that has ever happened to the data since its inception. This can lead to the finding of stronger regressions and can surface patterns that a single dataset just can’t do.

I do believe that our institutions care about past data, and there is absolutely no doubt that the University of Toronto performs timely backups. The only thing that isn’t happening is providing easy access.

## We still have a long way to go

This is only the first phase of what Cobalt and other university open data initiatives can become. In an ideal world, our data doesn’t have to be scraped with a high level of difficulty. It should be given in a machine readable format by the institutions themselves.

If we keep talking about the advantages of open data and how it can foster innovation on campuses, then the people in charge of our schools will hear us and take action.
