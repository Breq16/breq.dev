function append_cell(row, data) {
    let cell = document.createElement("td")
    cell.innerHTML = data
    row.appendChild(cell)
}

function add_server_info(server_info) {
    document.getElementById("server-name").innerHTML = server_info["name"]
    document.getElementById("member-count").innerHTML = server_info["member_count"]
}

function add_richest(richest) {
    let table = document.getElementById("richest-members")

    for (const obj of richest) {
        let row = document.createElement("tr")

        let link = document.createElement("a")
        link.innerHTML = obj["name"]
        link.href = "/apps/breqbot/member?id="+obj["id"]

        let cell = document.createElement("td")
        cell.appendChild(link)
        row.appendChild(cell)

        append_cell(row, obj["balance"])
        table.appendChild(row)
    }
}

function add_shop_items(shop_items) {
    let table = document.getElementById("shop-items")

    for (const item of shop_items) {
        let row = document.createElement("tr")
        append_cell(row, item["name"])
        append_cell(row, item["desc"])
        append_cell(row, item["price"])
        table.appendChild(row)
    }
}

document.addEventListener('DOMContentLoaded', function() {
    const urlParams = new URLSearchParams(window.location.search)
    const idParam = urlParams.get("id")

    fetch("https://bot.breq.dev/api/guild?id="+idParam)
    .then(response => response.json())
    .then(data => {
        add_server_info(data)
    })

    fetch("https://bot.breq.dev/api/richest?id="+idParam)
    .then(response => response.json())
    .then(data => {
        add_richest(data)
    })

    fetch("https://bot.breq.dev/api/shop?id="+idParam)
    .then(response => response.json())
    .then(data => {
        add_shop_items(data)
    })
})
