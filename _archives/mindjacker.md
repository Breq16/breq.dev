---
layout: project
title: Mindjacker
subtitle: A Python library wrapper to interact with the NXT
created: 2017
repo: Breq16/mindjacker
status: old
---

## Overview

This was a wrapper for [nxt-python](https://github.com/Eelviny/nxt-python) I wrote while I was in middle school for projects like the [R2D2]({% link _archives/r2d2.md %}).

## Motivation

I liked the featureset of nxt-python, but I wanted to make it more Pythonic and add some common features (like playing audio) that I often used in robots.

## Technical Description

It's a wrapper API, there's not much to describe.

{% highlight python %}
import mindjacker

brick = mindjacker.Brick()

brick.move(["b", "c"], 100, rotations=5, steer=50, brake=False)
brick.playSound("sound.mp3")

measurement = brick.ultrasonic(1)
print(f"Ultrasonic sensor measures {measurement} inches")

brick.write("data.log", measurement)
{% endhighlight %}

## Results

This was one of the first APIs I actually designed. It's a pretty flawed design, but it was a learning experience. This was also one of the first times I wrote software to make it easier for me to write more software, and I decided to make it open-source.
