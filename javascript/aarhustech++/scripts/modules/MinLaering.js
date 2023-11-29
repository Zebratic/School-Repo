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






function GetAnswer(question_id) {

}

function FindAllSectionsAndQuestions() {
    var sections = document.querySelectorAll('[data-type="exercise"]');
    console.log("Found " + sections.length + " sections");
    
    sections.forEach(function (section) {
        var name = section.getAttribute("data-prefix");
        var section_id = section.getAttribute("id");
        console.log(name + ": " + section_id);

        // get grammar-outer-container -> exercise-content -> pb-5 -> x amount of my-7
        var questions = section.querySelectorAll('.my-7');
        if (questions.length > 0)
            console.log("Found " + questions.length + " questions");
    });
}




window.addEventListener('load', function () {
    setTimeout(FindAllSectionsAndQuestions, 3000); // Wait for page to load
    setInterval(FindAllSectionsAndQuestions, 10000); // Check every 10 seconds
});