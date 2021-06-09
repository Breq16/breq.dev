function append_cell(row, data) {
    let cell = document.createElement("td")
    cell.innerHTML = data
    row.appendChild(cell)
}

function fill_info(response) {
    document.getElementById("member-name").innerHTML = response["name"]

    let server_link = document.createElement("a")
    server_link.innerHTML = response["guild_name"]
    server_link.href = "/apps/breqbot/server?id=" + response["guild_id"]
    document.getElementById("server-name").innerHTML = ""
    document.getElementById("server-name").appendChild(server_link)

    document.getElementById("member-count").innerHTML = response["guild_size"]

    document.getElementById("balance").innerHTML = response["balance"]

    let inventory_table = document.getElementById("inventory-table")

    for (const item of response["inventory"]) {
        let row = document.createElement("tr")

        append_cell(row, item["quantity"])
        append_cell(row, item["name"])
        append_cell(row, item["desc"])

        inventory_table.appendChild(row)
    }

    let outfit_table = document.getElementById("outfit-table")

    for (const item of response["outfit"]) {
        let row = document.createElement("tr")

        append_cell(row, item["name"])
        append_cell(row, item["desc"])

        outfit_table.appendChild(row)
    }
}

function add_card(params, id, guild) {
    params["format"] = "html";

    let card = document.getElementById("card-frame")

    card.src = ("https://cards.breq.dev/card?"
                    + new URLSearchParams(params).toString())
}

document.addEventListener('DOMContentLoaded', function() {
    const urlParams = new URLSearchParams(window.location.search)
    const idParam = urlParams.get("id")
    const guildId = urlParams.get("guild_id")

    fetch("https://bot.breq.dev/api/profile?id="+idParam+"&guild_id="+guildId)
    .then(response => response.json())
    .then(data => {
        fill_info(data)
    })

    fetch("https://bot.breq.dev/api/card?id="+idParam+"&guild_id="+guildId)
    .then(response => response.json())
    .then(params => {
        add_card(params, idParam, guildId)
    })
})
