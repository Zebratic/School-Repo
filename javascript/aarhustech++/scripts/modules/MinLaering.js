console.log("[MinLaering Mod] Initialized");

var JSONData = {};

var s = document.createElement('script');
s.src = chrome.runtime.getURL('scripts/modules/intercepter.js');
s.onload = function() {
    this.remove();
};
(document.head || document.documentElement).appendChild(s);


document.addEventListener('MinLaeringMod_Data', function (e) {
    var data = e.detail;
    var url = e.target.URL;

    JSONData = JSON.parse(data);
    console.log("[MinLaering Mod] Intercepted data from " + url);
    console.log(JSONData);
});