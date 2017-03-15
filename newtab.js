// display booksmarks
chrome.bookmarks.search('a', function(sites) {
    sites = sites.slice(0, 15);
    var list = sites.map(function(site) {
        return '<li><a href="' + site.url + '"><span class="tab"><img src="https://www.google.com/s2/favicons?domain=' + site.url + '" width="20" /></span></a></li>';
    });
    list.forEach(function(element) { $("#bookmarks").append(element) }, this);
});

// display tabs
chrome.tabs.getAllInWindow(null, function(tabs) {
    tabs.forEach(function(tab) {
        $("#tab-list").append('<li data-id="' + tab.id + '"><span class="switch-tab">' + tab.title + '</span> <span class="close-tab">x</span></li>');
    }, this);
});

$(document).on('click', '.close-tab', function() {
    var tabId = $(this).parent().data('id');
    $(this).parent().hide();
    chrome.tabs.remove(tabId);
});

$(document).on('click', '.switch-tab', function() {
    var tabId = $(this).parent().data('id');
    chrome.tabs.update(tabId, {active: true});
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
