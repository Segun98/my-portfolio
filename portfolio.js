// DARK MODE CODES

//var moon = document.querySelector(".fa-moon")
var moon = document.getElementById("darkmode")
const header = document.querySelector(".header")
var body = document.getElementById("body")
var footer = document.getElementById("footer")
var abouttextwhite = document.querySelector('.aboutmetext')
var servicewhite = document.querySelector('#servicescontent')
var skillstextwhite = document.querySelector('#skillscontent')

moon.addEventListener('click', moonclick)

function moonclick() {

    body.classList.toggle("bodydark")
    header.classList.toggle("headerdark")
    footer.classList.toggle("darkfooter")
    abouttextwhite.classList.toggle("textwhite")
    servicewhite.classList.toggle("servicetextwhite")
    skillstextwhite.classList.toggle("skillswhite")


}



// DARK MODE CODES END



// TOGGLE CODES TO OPEN CONTENT


var about = document.getElementById('aboutbox')
var aboutcontent = document.getElementById("aboutcontent")

about.addEventListener('click', openabout)

function openabout() {

    aboutcontent.classList.toggle("openabout")

    var arrow = document.querySelector(".aboutbox .fa-angle-down")

    if (arrow.style.transform === "rotate(180deg)") {
        arrow.style.transform = "rotate(0deg)"
    } else {
        arrow.style.transform = "rotate(180deg)"
    }

}



var services = document.getElementById('servicesbox')
services.addEventListener('click', openservices)
function openservices() {
    var servicescontent = document.querySelector("#servicescontent")
    servicescontent.classList.toggle("openservices")

    var arrow = document.querySelector(".servicesbox .fa-angle-down")

    if (arrow.style.transform === "rotate(180deg)") {
        arrow.style.transform = "rotate(0deg)"
    } else {
        arrow.style.transform = "rotate(180deg)"
    }

}


var skills = document.getElementById('skillsbox')
var skillscontent = document.getElementById("skillscontent")

skills.addEventListener('click', openskills)

function openskills() {

    skillscontent.classList.toggle("openskills")

    var arrow = document.querySelector(".skillsbox .fa-angle-down")

    if (arrow.style.transform === "rotate(180deg)") {
        arrow.style.transform = "rotate(0deg)"
    } else {
        arrow.style.transform = "rotate(180deg)"
    }


}

var projects = document.getElementById('projectsbox')
var projectscontent = document.getElementById("projectscontent")

projects.addEventListener('click', openprojects)

function openprojects() {

    projectscontent.classList.toggle("openprojects")

    var arrow = document.querySelector(".projectsbox .fa-angle-down")

    if (arrow.style.transform === "rotate(180deg)") {
        arrow.style.transform = "rotate(0deg)"
    } else {
        arrow.style.transform = "rotate(180deg)"
    }


}

var contact = document.getElementById('contactbox')
var contactcontent = document.getElementById("contactcontent")

contact.addEventListener('click', opencontact)

function opencontact() {

    contactcontent.classList.toggle("opencontact")

    var arrow = document.querySelector(".contactbox .fa-angle-down")

    if (arrow.style.transform === "rotate(180deg)") {
        arrow.style.transform = "rotate(0deg)"
    } else {
        arrow.style.transform = "rotate(180deg)"
    }


}