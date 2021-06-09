function update_snowflake(data) {
    snowflake_int = BigInt(data["snowflake_str"])
    const epoch = 1577836800n  // Jan 1, 2020

    let snowflake = document.getElementById("snowflake")
    let timestamp = document.getElementById("timestamp")
    let worker_id = document.getElementById("worker_id")
    let increment = document.getElementById("increment")

    snowflake.innerHTML = snowflake_int
    timestamp_int = Number((snowflake_int >> 22n) + epoch*1000n)
    timestamp_date = new Date(timestamp_int)
    timestamp.innerHTML = timestamp_date.toUTCString()
    worker_id.innerHTML = (snowflake_int & 0x3FF000n) >> 12n
    increment.innerHTML = snowflake_int & 0xFFFn
}

document.addEventListener('DOMContentLoaded', function() {
    const url = "https://snowflake.breq.dev/"

    fetch(url, {method: "POST"})
    .then(response => response.json())
    .then(data => {
        update_snowflake(data)
    })
})
