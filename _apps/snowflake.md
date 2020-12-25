---
layout: showcase
title: Snowflake
subtitle: A scalable service to generate time-ordered, unique ID numbers.
---

<script src="/assets/js/snowflake.js"></script>

We've generated a unique ID, just for you:

<h3 id="snowflake">Generating...</h3>

*(don't like it? refresh the page for a new one!)*

And here's how we came up with it:

<table>
    <tr>
        <th>Timestamp</th>
        <th>Worker ID</th>
        <th>Increment</th>
    </tr>
    <tr>
        <td id="timestamp">Loading...</td>
        <td id="worker_id">Loading...</td>
        <td id="increment">Loading...</td>
    </tr>
</table>

<br>

Pretty cool, right? But how can you bake this into your own project?
Send a POST request to `https://snowflake.breq.dev/`, and you'll receive a JSON response with your very own snowflake.

Read more on the [project page <i class="fas fa-angle-double-right" aria-hidden="true"></i>]({% link _hacks/snowflake.md %})
