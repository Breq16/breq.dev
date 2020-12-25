---
layout: showcase
title: Cards
subtitle: Generate and embed digital cards featuring custom images and text.
---

<style>
.align-left {
    margin-left: 0 !important;
}
</style>

# Getting a card

Send a GET request to `https://cards.breq.dev/card` with some of the following parameters:

|---|---|---|
| Parameter | Description |
| format | Format of the returned card (`html`, `png`, `jpeg`) |
| template | Template used to generate the card (`background-image`, `basic`) |

In addition, each template has some of its own parameters. For instance, the background-image template takes:

|---|---|---|
| name | Name printed in large text on the card |
| bio | Description printed in smaller text |
| background_image | Image in the top half of the card |

# Embedding a card

**Can you use HTML?** - Include an IFrame linking to the card.

`<iframe height="300" width="500" src="https://cards.breq.dev/card?format=html&template=background-image&name=IFrame Card&bio=Card embedded in a webpage using an iframe.&background_image=https://breq.dev/assets/images/pansexual.png"></iframe>`

<iframe style="border:none;" height="300" width="500" src="https://cards.breq.dev/card?format=html&template=background-image&name=IFrame Card&bio=Card embedded in a webpage using an iframe.&background_image=https://breq.dev/assets/images/pansexual.png"></iframe>

**Otherwise, use images** - Use a basic `<img>` tag, or markdown.

![](https://cards.breq.dev/card?format=png&template=background-image&name=Rendered Card&bio=Card rendered on the server and included as a PNG.&background_image=https://breq.dev/assets/images/pansexual.png){: .actual-size .align-left}

If you can, use IFrames. This reduces server-side load, speeding up your app.

# Styling Tips

Add a `border-radius: 15px` to the IFrame for some nice, rounded corners:

<iframe style="border:none; border-radius: 15px" height="300" width="500" src="https://cards.breq.dev/card?format=html&template=background-image&name=Card with rounded edges&bio=Thanks to the CSS `border-radius` property. *That's pretty neat!*&background_image=https://breq.dev/assets/images/pansexual.png"></iframe>
