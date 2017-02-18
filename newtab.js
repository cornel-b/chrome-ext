
// display most visited websites
chrome.topSites.get(function(sites) {
    sites = sites.slice(0, 12);
    sites.forEach(function(element) {
        $("#most-visited").append('<li><a href="' + element.url + '"><span class="tab"><img src="https://www.google.com/s2/favicons?domain=' + element.url + '" width="20" /></span></a></li>');
    }, this);
});

// display booksmarks
chrome.bookmarks.search('a', function(sites) {
    sites = sites.slice(0, 12);
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
