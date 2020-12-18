---
layout: page
title: Breqbot Status
---

<style type="text/css">
.jumbotron.status-online {
    background-color: #09E85E;
}

.jumbotron.status-offline {
    background-color: #FF1C1C;
}

.big-number {
    font-size: 72px;
}
</style>

<script type="text/javascript" src="/assets/js/breqbot/status.js"></script>

<div class="jumbotron" id="status-jumbotron">
    <h1 class="display-4" id="status-text">Loading...</h1>
</div>

<h1>Statistics</h1>

<div class="row center">
    <div class="col-xl-3 col-lg-4 col-md-6">
        <div class="card">
            <div class="card-body">
                <h1 class="big-number" id="server-count">...</h1>
                <h2>Servers joined</h2>
            </div>
        </div>
    </div>

    <div class="col-xl-3 col-lg-4 col-md-6">
        <div class="card">
            <div class="card-body">
                <h1 class="big-number" id="user-count">...</h1>
                <h2>Total users</h2>
            </div>
        </div>
    </div>

    <div class="col-xl-3 col-lg-4 col-md-6">
        <div class="card">
            <div class="card-body">
                <h1 id="git-hash">...</h1>
                <h2>Latest Git hash</h2>
            </div>
        </div>
    </div>

    <div class="col-xl-3 col-lg-4 col-md-6">
        <div class="card">
            <div class="card-body">
                <h1 class="big-number" id="testing-server-size">...</h1>
                <h2>Testing server members</h2>
            </div>
        </div>
    </div>

    <div class="col-xl-3 col-lg-4 col-md-6">
        <div class="card">
            <div class="card-body">
                <h1 class="big-number" id="commands-run">...</h1>
                <h2>Commands run</h2>
            </div>
        </div>
    </div>
</div>
