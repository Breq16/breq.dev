function set_statistics(response) {
    document.getElementById("status-jumbotron").classList.add("status-online")
    document.getElementById("status-text").innerHTML = "Breqbot is online!"

    document.getElementById("server-count").innerHTML = response["server_count"]
    document.getElementById("user-count").innerHTML = response["user_count"]
    document.getElementById("git-hash").innerHTML = response["git_hash"].substring(0, 7)
    document.getElementById("testing-server-size").innerHTML = response["testing_server_size"]
    document.getElementById("commands-run").innerHTML = response["commands_run"]
}

function set_error(response) {
    document.getElementById("status-jumbotron").classList.add("status-offline")
    document.getElementById("status-text").innerHTML = "Breqbot is offline!"
}

document.addEventListener('DOMContentLoaded', function() {
    const url = "https://bot.breq.dev/api/status"

    fetch(url)
    .catch(error => {
        set_error()
    })
    .then(response => response.json())
    .then(data => {
        set_statistics(data)
    })
})
