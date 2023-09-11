console.log("BedreSkema.js injected successfully!!");

class Modul
{
    date;
    time;
    name;
    room;
    teacher;
    isabsent;

    constructor(date, time, name, room, teacher, isabsent)
    {
        this.date = date;
        this.time = time;
        this.name = name;
        this.room = room;
        this.teacher = teacher;
        this.isabsent = isabsent;
    }
}

var skema = [];

function LoadSkema()
{
    skema = [];

    // find all id="day0Col" with 0-4 for all days
    for (let day = 0; day < 5; day++)
    {
        let dayhtml = document.getElementById("day" + day + "Col").innerHTML;

        // split into modules
        let moduler = dayhtml.split("<table class=\"AppointmentBoxContent\">");

        // for each module
        for (let i = 1; i < moduler.length; i++)
        {
            let time = moduler[i].split("class=\"AppointmentIcon\">")[1].split("<")[0];
            let name = moduler[i].split("class=\"AppointmentIcon\">")[2].split("<")[0];
            let room = moduler[i].split("class=\"AppointmentIcon\">")[3].split("<")[0];
            let teacher = moduler[i].split("class=\"AppointmentIcon\">")[4].split("<")[0];
            let isabsent = (moduler[i].includes("#232323;"));

            let modul = new Modul(day, time, name, room, teacher, isabsent);

            // add to skema
            console.log(day + " | " + time + " | " + name + " | " + room + " | " + teacher + " | " + isabsent);
            skema.push(modul);
        }
    }
}


window.onload = SkemaMonitor;

var lastskemahtml = "";
function SkemaMonitor()
{
    let skemahtml = document.getElementById("HeaderTable").innerHTML;

    if (skemahtml != lastskemahtml)
    {
        LoadSkema();
        FixCSS(); // part of darkmode.js
        lastskemahtml = skemahtml;
    }

    // wait for 100ms
    setTimeout(SkemaMonitor, 100);
}


// setup mouse event
document.addEventListener("mouseover", function(event) {
    if (event.target.tagName == "TD")
    {
        let parent = event.target;
        for (let i = 0; i < 5; i++)
        {
            // until name is test (max 4 times) once found, set height to auto
            console.log(parent);
            if (parent.getAttribute("name") == "test ")
            {
                parent.style.height = "auto";
                // get new height after setting to auto
                let height = parent.clientHeight;
                parent.parentElement.style.height = height + "px";
                parent.parentElement.style.position = "absolute";
                parent.parentElement.style.zIndex = "100";
                parent.parentElement.style.width = "auto";
                console.log("set height to auto");
                break;
            }
            parent = parent.parentElement;
        }
    }
});
document.addEventListener("mouseout", function(event) {
    if (event.target.tagName == "TD")
    {
        // go up until name is test (max 4 times) once found, set height to 59px (default)
        let parent = event.target;
        for (let i = 0; i < 5; i++)
        {
            // until name is test (max 4 times) once found, set height to auto
            if (parent.getAttribute("name") == "test ")
            {
                parent.style.height = "59px";
                parent.parentElement.style.height = "59px";
                parent.parentElement.style.position = "relative";
                parent.parentElement.style.zIndex = "1";
                parent.parentElement.style.width = "98%";
                console.log("set height to 59px");
                break;
            }
            parent = parent.parentElement;
            
        }

    }
});