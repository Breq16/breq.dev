function get_list(nsfw) {
    let url = "https://redditor.breq.dev/list"
    if (nsfw) {
        url += "?nsfw=1"
    }
    return fetch(url).then(response => response.json())
}

function append_cell(row, data) {
    let cell = document.createElement("td")
    cell.innerHTML = data
    row.appendChild(cell)
}

function put_list_as_table() {
    const urlParams = new URLSearchParams(window.location.search)
    const nsfwParam = urlParams.get("nsfw")

    let nsfw = false
    if ([null, "n", "no", "0", "false"].includes(nsfwParam)) {
        nsfw = false
    } else {
        nsfw = true
    }

    const table = document.getElementById("redditor_list_table")

    get_list(nsfw).then(function add_to_table(response) {
        for (const [name, config] of Object.entries(response)) {
            let row = document.createElement("tr")

            let link = document.createElement("a")
            link.innerHTML = "/"+name
            link.href = "https://redditor.breq.dev/"+name
            let cell = document.createElement("td")
            cell.appendChild(link)
            row.appendChild(cell)

            append_cell(row, config["sub"])
            append_cell(row, config["desc"])
            if (nsfw && config["nsfw"]) {
                append_cell(row, "NSFW")
            } else {
                append_cell(row, "")
            }

            table.appendChild(row)
        }
    })
}

document.addEventListener('DOMContentLoaded', function() {
    put_list_as_table()
})
