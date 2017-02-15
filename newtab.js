
// display most visited websites
chrome.topSites.get(function(sites) {
    sites = sites.slice(0, 12);
    sites.forEach(function(element) {
        $("#most-visited").append('<li><a href="' + element.url + '"><span class="tab"><img src="https://www.google.com/s2/favicons?domain=' + element.url + '" width="20" /></span></a></li>');
    }, this);
});

chrome.bookmarks.search('a', function(sites) {
    sites = sites.slice(0, 12);
    sites.forEach(function(element) {
        $("#bookmarks").append('<li><a href="' + element.url + '"><span class="tab"><img src="https://www.google.com/s2/favicons?domain=' + element.url + '" width="20" /></span></a></li>');
    }, this);
});