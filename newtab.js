$(document).on('click', '.close-tab', function() {
    var tabId = $(this).parent().data('id');
    $(this).parent().hide();
    chrome.tabs.remove(tabId);
});

// current time
function updateTime()
{
    var date = new Date();
    var hour = (date.getHours() < 10 ? '0' : '') + date.getHours();
    var minute = (date.getMinutes() < 10 ? '0' : '') + date.getMinutes();
    $('#current-time').html(hour + ':' + minute);
}

$(function() {
    updateTime();
});

function timeout() {
    setTimeout(function () {
        updateTime();
        timeout();
    }, 1000);
}

timeout();
