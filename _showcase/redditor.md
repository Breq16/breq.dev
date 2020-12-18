---
layout: showcase
title: AutoRedditor
subtitle: A service to return random Reddit posts
---

<script src="/assets/js/redditor.js"></script>

Do a GET request to `https://redditor.breq.dev/` + one of the endpoints below to get randomly selected content from Reddit.

<table id="redditor_list_table">
    <tr>
        <th>URL</th>
        <th>Subreddit</th>
        <th>Description</th>
        <th>NSFW</th>
    </tr>
</table>
<br>

You can also get this list as a JSON object by GETting `/list`.

### Want to ensure you don't get the same images twice?
Add `?channel=[some string here]` to ensure no repetion within 2 hours or 20 posts (whichever is sooner).

Want your favorite sub added? Shoot me a message!

Read more on the [project page <i class="fas fa-angle-double-right" aria-hidden="true"></i>]({% link _hacks/redditor.md %}) 
