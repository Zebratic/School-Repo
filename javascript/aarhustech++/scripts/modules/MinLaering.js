console.log("[MinLaering Mod] Initialized");

var JSONData = {};

var s = document.createElement('script');
s.src = chrome.runtime.getURL('scripts/modules/intercepter.js');
s.onload = function () {
    this.remove();
};
(document.head || document.documentElement).appendChild(s);

document.addEventListener('MinLaeringMod_Data', function (e) {
    var url = e.target.URL;
    JSONData = e.detail;
    console.log("[MinLaering Mod] Intercepted data from " + url);
    console.log(JSONData);
});


function GetAnswer(book_id, section_id, exercise_question_id, exercise_question_task_id) {
    if (JSONData == null) {
        console.log("[MinLaering Mod] Mod has not intercepted any data yet");
        return;
    }

    console.log("[MinLaering Mod] Searching for BOOK:" + book_id + " SECTION:" + section_id + " EXERCISE:" + exercise_question_id + " TASK:" + exercise_question_task_id);

    var book_id_int = parseInt(book_id.split('-')[1]); // section-XXXXX
    var section_id_int = parseInt(section_id.split('-')[1]); // section-XXXXX
    var exercise_question_id_int = parseInt(exercise_question_id.split('-')[2]); // exercise-question-XXXXX
    var exercise_question_task_id = parseInt(exercise_question_task_id.split('-')[3]); // exercise-question-task-XXXXX

    
    var book = JSONData.data.sections.find(x => x.id === book_id_int);
    if (book == null) {
        console.log("[MinLaering Mod] Could not find book");
        return;
    }

    var section = book.sections.find(x => x.id === section_id_int);
    if (section == null) {
        console.log("[MinLaering Mod] Could not find section");
        return;
    }

    var question = section.sections.find(x => x.id === exercise_question_id_int);
    if (question == null) {
        console.log("[MinLaering Mod] Could not find question");
        return;
    }

    console.log(question);
    var task = question.tasks.find(x => x.id === exercise_question_task_id);
    if (task == null) {
        console.log("[MinLaering Mod] Could not find task");
        return;
    }

    var answer = {
        type: task.type.machine_name,
        options: []
    }

    console.log("Question type: " + task.type.machine_name);
    // answers are found in conf.options[].is_correct

    switch (task.type.machine_name) {
        case "clickword": {
            var options_text = task.conf.options.find(x => x.is_correct === true).option;
            answer.options.push(options_text);            
            return answer;
        }


        case "dropdown": {
            var dropdown_selections = task.conf.content; // "{-|Gendrivelse 1|Gendrivelse 2-correct}"
            var dropdown_selections_split = dropdown_selections.split("|");
            for (var i = 0; i < dropdown_selections_split.length; i++) {
                if (dropdown_selections_split[i].includes("-correct}")) {
                    var correct_answer = dropdown_selections_split[i].replace("-correct}", "");
                    answer.options.push(correct_answer);
                }
            }
            return answer;
        }

        case "freetext": return answer;
            


        default: return answer;
    }
}

function FindAllSectionsAndQuestions() {
    // data-type="book_chapter_section"
    var book_chapter_sections = document.querySelectorAll('[data-type="book_chapter_section"]');
    for (var i = 0; i < book_chapter_sections.length; i++) {
        var book_chapter_section_id = book_chapter_sections[i].getAttribute('id');
        if (!book_chapter_section_id.includes("section-"))
            continue;

        // data-type="exercise"
        var exercises = book_chapter_sections[i].querySelectorAll('[data-type="exercise"]');
        for (var j = 0; j < exercises.length; j++) {
            var exercise_id = exercises[j].getAttribute('id');
            if (!exercise_id.includes("section-"))
                continue;

            // <div data-v-09f888e3="" id="exercise-question-64916" class="box is-paddingless has-border-radius-large has-background-grey-lightest">
            var exercise_question = exercises[j].querySelector('[id^="exercise-question-"]');
            if (exercise_question == null)
                continue;

            var exercise_questions_id = exercise_question.getAttribute('id');
            if (!exercise_questions_id.includes("exercise-question-"))
                continue;

            // id="exercise-question-task-62929"
            var exercise_question_task = exercise_question.querySelector('[id^="exercise-question-task-"]');
            if (exercise_question_task == null)
                continue;

            var exercise_question_task_id = exercise_question_task.getAttribute('id');
            if (document.getElementById("minlaeringmod-showanswer-button-" + exercise_question_task_id) != null)
                continue;


            var answer = GetAnswer(book_chapter_section_id, exercise_id, exercise_questions_id, exercise_question_task_id);

            switch (answer.type) {
                case "clickword": {
                    for (var k = 0; k < answer.options.length; k++)
                    {
                        var correct_option = answer.options[k];
                    
                        // find div that has .option as its text content, and make it green
                        var clickable_sections = exercise_question_task.getElementsByClassName("click-word-input");
                        for (var l = 0; l < clickable_sections.length; l++) {
                            var clickable_section = clickable_sections[l];
                            if (clickable_section.textContent == " " + correct_option + " ") {
                                clickable_section.setAttribute("style", "background-color: #AC4303;");
                            }   
                        }
                    }
                    break;
                }

                case "dropdown": {
                    /*
                    <div class="dropdown-items"><div class="dropdown-item is-flex is-flex-wrap-nowrap is-align-items-center is-clickable is-size-7"><svg data-v-2e57dc73="" class="base-checkbox is-flex-shrink-0 mr-4 is-active has-background-blue is-medium"><use data-v-2e57dc73="" xlink:href="/img/icons.125a1316.svg#icon-checkbox-active"></use></svg><span class=""> - </span></div><div class="dropdown-item is-flex is-flex-wrap-nowrap is-align-items-center is-clickable is-size-7"><svg data-v-2e57dc73="" class="base-checkbox is-flex-shrink-0 mr-4 has-background-grey-lighterer is-medium"><use data-v-2e57dc73="" xlink:href="/img/icons.125a1316.svg#icon-checkbox-"></use></svg><span class=""> Gendrivelse 1 </span></div><div class="dropdown-item is-flex is-flex-wrap-nowrap is-align-items-center is-clickable is-size-7"><svg data-v-2e57dc73="" class="base-checkbox is-flex-shrink-0 mr-4 has-background-grey-lighterer is-medium"><use data-v-2e57dc73="" xlink:href="/img/icons.125a1316.svg#icon-checkbox-"></use></svg><span class=""> Gendrivelse 2 </span></div></div>
                    */
                    var dropdown_item = exercise_question_task.getElementsByClassName("dropdown-item");
                    for (var k = 0; k < dropdown_item.length; k++) {
                        var item = dropdown_item[k];

                        // get span underneath and then get text content from that
                        var span = item.getElementsByTagName("span")[0];
                        var span_text = span.textContent;
                        for (var l = 0; l < answer.options.length; l++) {
                            if (span_text == " " + answer.options[l] + " ") {
                                var svg = item.getElementsByTagName("svg")[0];
                                var current_class = svg.getAttribute("class");
                                current_class = current_class.replace("has-background-blue", "has-background-orange");
                                current_class = current_class.replace("has-background-grey-lighterer", "has-background-orange");
                                svg.setAttribute("class", current_class);
                            }
                        }
                    }
                    break;
                }

                default: {
                    console.log("[MinLaering Mod] Unknown question type");
                    continue;
                }
            }
        }
    }
}

window.addEventListener('load', function () {
    setTimeout(FindAllSectionsAndQuestions, 3000); // Wait for page to load
    setInterval(FindAllSectionsAndQuestions, 3000); // Check every 3 seconds
});

// on every click on page, check if there are any new questions
document.addEventListener('click', function (e) {
    FindAllSectionsAndQuestions();
});