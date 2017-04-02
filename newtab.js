function updateTime()
{
    var date = new Date();
    var hour = (date.getHours() < 10 ? '0' : '') + date.getHours();
    var minute = (date.getMinutes() < 10 ? '0' : '') + date.getMinutes();
    document.getElementById('current-time').innerHTML = hour + ':' + minute;
}

function timeout() {
    setTimeout(function () {
        updateTime();
        timeout();
    }, 1000);
}

timeout();