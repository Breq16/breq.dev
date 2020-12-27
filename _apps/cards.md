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

# Freezing a card

If you send a POST to that URL instead, your card will be "frozen": rendered on the server and stored there. The server will send back a JSON response with `{"card_id": 130810678565865982}` (or whatever your ID is). Then, send a GET to `https://cards.breq.dev/card/<id>.html` or `.png` or `.jpg` to get the card.

**Freezing cards is a good idea.** It will reduce the server load, since the server won't have to re-render the card every time it gets served. It will also speed up your app, since it won't have to wait for the server to render the card before displaying it to the user.

## Try it

<div class="form-group row">
<label for="card_name" class="col-sm-2">Name: </label>
<input type="text" class="form-control col-sm-10" id="card_name" />
</div>

<div class="form-group row">
<label for="card_bio" class="col-sm-2">Bio: </label>
<input type="text"  class="form-control col-sm-10" id="card_bio" />
</div>

<div class="form-group row">
<label for="card_background" class="col-sm-2">Background Image URL: </label>
<input type="url" class="form-control col-sm-10" id="card_background" value="https://breq.dev/assets/images/pansexual.png" />
</div>

<div class="form-group row">
<label for="card_format" class="col-sm-2">Card Format: </label>
<select id="card_format" class="form-control col-sm-10">
<option value="html">HTML (for IFraming)</option>
<option value="png">PNG (for image hotlinking)</option>
<option value="jpeg">JPEG (for image hotlinking)</option>
</select>
</div>

<button type="button" class="btn btn-secondary btn-lg" onclick="updateCard()">Update</button> <button type="button" class="btn btn-primary btn-lg" onclick="freezeCard()">Freeze</button>

<iframe style="border:none; border-radius: 15px" id="try_it_iframe" height="300" width="500" src="https://cards.breq.dev/card?format=html&template=background-image"></iframe>

<div class="form-group row">
<label for="card_url" class="col-sm-2">Card URL: </label>
<input type="url" id="card_url" class="form-control col-sm-10" disabled="true">
</div>

<script>

var card_name = document.getElementById("card_name")
var card_bio = document.getElementById("card_bio")
var card_background = document.getElementById("card_background")
var card_format = document.getElementById("card_format")

var card_url = document.getElementById("card_url")
var iframe = document.getElementById("try_it_iframe")

function updateCard() {
    const params = new URLSearchParams({
        name: card_name.value,
        bio: card_bio.value,
        background_image: card_background.value,
        template: "background-image",
        format: card_format.value
    })

    const url = "https://cards.breq.dev/card?" + params.toString()

    card_url.value = url
    iframe.src = url
}

function freezeCard() {
    const params = new URLSearchParams({
        name: card_name.value,
        bio: card_bio.value,
        background_image: card_background.value,
        template: "background-image"
    })

    const url = "https://cards.breq.dev/card?" + params.toString()

    fetch(url, {"method": "post"})
        .then(response => response.json())
        .then(data => {
            const frozen_url = `https://cards.breq.dev/card/${data["card_id"]}.${card_format.value}`
            card_url.value = frozen_url
            iframe.src = frozen_url
        })
}
</script>

<br>

# Embedding a card

**Can you use HTML?** - Include an IFrame linking to the card.

`<iframe height="300" width="500" src="https://cards.breq.dev/card?format=html&template=background-image&name=IFrame Card&bio=Card embedded in a webpage using an iframe.&background_image=https://breq.dev/assets/images/pansexual.png"></iframe>`

<iframe style="border:none;" height="300" width="500" src="https://cards.breq.dev/card/130828421629413919.html"></iframe>

**Otherwise, use images** - Use a basic `<img>` tag, or markdown.

`![](https://cards.breq.dev/card?format=png&template=background-image&name=Rendered Card&bio=Card rendered on the server and included as a PNG.&background_image=https://breq.dev/assets/images/pansexual.png)`

![](https://cards.breq.dev/card/130828557977848352.png){: .actual-size .align-left}

If you can, use IFrames. This reduces server-side load, speeding up your app.

# Styling Tips

Add a `border-radius: 15px` to the IFrame for some nice, rounded corners:

<iframe style="border:none; border-radius: 15px" height="300" width="500" src="https://cards.breq.dev/card/130828825331173922.html"></iframe>
