---
layout: showcase
title: McStatus
subtitle: A service to embed information about a Minecraft server into a website or other app.
---

<script type="text/javascript" src="https://github.breq.dev/mcstatus/mcstatus.js"></script>

<div class="mc-status" data-mc-server="mc.hypixel.net"></div>
---
<div class="mc-status" data-mc-server="us.mineplex.com"></div>
---
<div class="mc-status" data-mc-server="not-a-real-server.example.com"></div>
---

# How to use?
Include the library:

{% highlight html %}
<script type="text/javascript" src="https://github.breq.dev/mcstatus/mcstatus.js"></script>
{% endhighlight %}

Add a `div` with `class="mc-status"` and `data-mc-server` set:

{% highlight html %}
<div class="mc-status" data-mc-server="[server IP]"></div>
{% endhighlight %}

Read more on the [project page <i class="fas fa-angle-double-right" aria-hidden="true"></i>]({% link _hacks/mcstatus.md %}) 
