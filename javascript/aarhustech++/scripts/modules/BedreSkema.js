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
        FixCSS();
        lastskemahtml = skemahtml;
    }

    // wait for 100ms
    setTimeout(SkemaMonitor, 100);
}

function FixCSS()
{
    let html = document.getElementsByTagName("head")[0].innerHTML;
    html = html.replaceAll("!important", "");
    document.getElementsByTagName("head")[0].innerHTML = html;
}


// setup mouse event
document.addEventListener("mouseover", function(event) {
    if (event.target.tagName == "TD" || event.target.tagName == "IMG" || event.target.tagName == "DIV")
    {
        let parent = event.target;
        for (let i = 0; i < 7; i++)
        {
            if (parent == null) break;
            if (parent.getAttribute("name") == "test ")
            {
                parent.style.fontWeight = "bold";
                parent.style.cursor = "pointer";
                break;
            }
            parent = parent.parentElement;
        }
    }
});
document.addEventListener("mouseout", function(event) {
    if (event.target.tagName == "TD" || event.target.tagName == "IMG" || event.target.tagName == "DIV")
    {
        let parent = event.target;
        for (let i = 0; i < 7; i++)
        {
            if (parent == null) break;
            if (parent.getAttribute("name") == "test ")
            {
                parent.style.fontWeight = "normal";
                break;
            }
            parent = parent.parentElement;
            
        }

    }
});