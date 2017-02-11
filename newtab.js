
// display most visited websites
chrome.topSites.get(function(sites){
    sites.forEach(function(element) {
        $("#most-visited").append('<li><a href="' + element.url + '"><span class="tab">' + element.title + '</span></a></li>');
    }, this);
});