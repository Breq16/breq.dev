---
layout: project
subtitle: A chatroom app with chatrooms, nicknames, and other features.
image: /assets/images/weschat.png
created: 2017
repo: Breq16/WesChat
status: old
---

![](/assets/images/weschat.png)

## Overview

This is a simple, graphical chatroom app with a few basic features such as dynamic chatrooms, custom theme support, and a client API for making custom clients.

## Motivation

This was a project I worked on to learn the basis of networking and GUI creation, back when I had first started to learn Python. I wanted to make a project I could use to control other project over the network without having to worry about the intricacies of using sockets.

## Technical Description

There's not a whole lot to say here. The chat app is split into a server and client. The server handles commands (such as commands to join or leave a room), the client does not keep track of what room it is in. The client loads themes as JSON files which contain information about fonts and colors to use. No encryption is used (because this is an old project and I didn't exactly understand SSL at the time).

## Results

It worked pretty well. I tried running it publicly on a virtual private server that my dad let me use, but it crashed after a while when some bot opened a bunch of simultaneous connections to it. It was still a great learning experience that helped me develop my Python skills.
