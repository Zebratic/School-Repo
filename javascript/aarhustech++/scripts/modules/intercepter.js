var school_id = -1;
var requestHeaders = {};
var has_fetched_data = false;

(function(xhr) {
    var XHR = XMLHttpRequest.prototype;
    var open = XHR.open;
    var send = XHR.send;
    var setRequestHeader = XHR.setRequestHeader;
    XHR.open = function(method, url) {
        this._method = method;
        this._url = url;
        this._requestHeaders = {};
        this._startTime = (new Date()).toISOString();
        return open.apply(this, arguments);
    };
    XHR.setRequestHeader = function(header, value) {
        this._requestHeaders[header] = value;
        return setRequestHeader.apply(this, arguments);
    };
    XHR.send = function(postData) {
        this.addEventListener('load', function() {
            requestHeaders = this._requestHeaders;

            if (this._url) {
                var url_match = this._url.match(/schools\/(\d+)/);
                if (url_match != null) {
                    school_id = url_match[1];
                    console.log("School ID: " + school_id);
                    if (has_fetched_data == false)
                        FetchAssignmentData();
                }
            }
        });
        return send.apply(this, arguments);
    }; 
})(XMLHttpRequest);

function FetchAssignmentData() {
    // current page url
    var url = window.location.href;
    // https://app.minlaering.dk/bog/46/kapitel/64912/sektion/64913#section-64915
    // https://api.minlaering.dk/schools/254/books/46/chapters/64912/sections/64913
    var book_id = url.match(/bog\/(\d+)/);
    var chapter_id = url.match(/kapitel\/(\d+)/);
    var section_id = url.match(/sektion\/(\d+)/);
    if (book_id != null && chapter_id != null && section_id != null) {
        book_id = book_id[1];
        chapter_id = chapter_id[1];
        section_id = section_id[1];
    }
    else {
        console.log("Could not find book, chapter or section ID");
        return;
    }

    var xhr = new XMLHttpRequest();
    xhr.open("GET", "https://api.minlaering.dk/schools/" + school_id + "/books/" + book_id + "/chapters/" + chapter_id + "/sections/" + section_id, true);
    for (var header in requestHeaders) {
        xhr.setRequestHeader(header, requestHeaders[header]);
    }
    

    xhr.onreadystatechange = function() {
        if (xhr.readyState == 4) {
            var response = xhr.responseText;
            var data = JSON.parse(response);
            has_fetched_data = true;
            document.dispatchEvent(new CustomEvent('MinLaeringMod_Data', { url: url, detail: data }));                  
        }
    }
    xhr.send();
}


console.log("[MinLaering Mod] Intercepter.js injected successfully!");

