---
layout: project
title: Cards
subtitle: Generate and embed digital cards featuring custom images and text.
image: /assets/images/card.png
created: 2020
repo: Breq16/cards
demo: /apps/cards
---

<iframe style="display: block; margin: auto; border:none; border-radius: 15px" height="300" width="500" src="https://cards.breq.dev/card?format=html&template=background-image&name=Breq&bio=developer of Breqbot + other cool things 🧑‍💻 | DMs open | https://breq.dev/&background_image=https://breq.keybase.pub/branding/blue_green.png"></iframe>

## Overview

This is a service to generate custom "cards" based on a defined template and user-supplied fields.

## Motivation

While working on [Breqbot]({% link _projects/breqbot.md %}), I wanted to replicate the "rank card" idea provided by bots like [MEE6](https://mee6.xyz/), but with user-supplied information and images instead.

I started by writing a simple program using PIL that would take in a user's name, bio, and profile image, and generate a simple PNG. I was frustrated by the process and the end result. I had to manually implement things I had taken for granted in the world of web-dev, such as text wrapping and emoji support. The process of implementing and modifying the card templates was time-consuming and tedious. Additionally, when I tried to include these rudimentary images on Breqbot's website, I needed to redo the entire layout in HTML and CSS.

I had the idea of creating a standalone service to generate these cards based on a predefined template and output them to either an IFrame or just an image file. The resulting output could be used anywhere: sent as a Discord message, included in a GitHub README, or embedded in a website.

## Technical Description

The service will render an HTML template with the user-provided parameters. Then, if an image file is requested, it will use [pyppeteer](https://github.com/pyppeteer/pyppeteer) to take a screenshot of the HTML template using Chrome.

## Results

I wasn't originally a huge fan of using a headless browser in the server-side, as it seemed like it would be a waste of resources and using the wrong tool for the job, but the service ended up working pretty well, although the time-to-first-byte is, predictably, pretty poor compared to the other projects I've made.

Performance aside, the process of developing new cards is much easier now. At the time of writing, I've pretty much only dipped my toes into web development, but I was able to make a few templates pretty quickly that looked much better than the old PIL tool ones.

While integrating this service with Breqbot and analyzing how it could be used, I noticed that most use cases will generate a card once and then embed it repeatedly. For instance, users will request each others' cards on Breqbot more often than they will update their own, and cards put in e.g. GitHub profiles are typically created once and left as-is for a while. As such, it's kind of wasteful to regenerate the card for every request. A caching layer, where cards could be "frozen" and given a permanent URL, would reduce the time-to-first-byte and the server load significantly.
