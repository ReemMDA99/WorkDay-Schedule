//Estimate working hours 9am-5pm
var timeBlock = [9, 10, 11, 12, 1, 2, 3, 4, 5];

// create a variable to show present past and future tasks
var taskContainerEl =document.querySelector(".container");
var eventEl = document.querySelector(".event");

//Create variables to store current date and time using moment.js
var currentDayEl = document.querySelector("#currentDay");
var currentHour = (moment().format('LLLL'));
console.log(currentHour);

//Create variables to show current date and time using moment.js
var showDay = function () {
var today = moment().format('MMMM Do YYYY, h:mm:ss a');
currentDayEl.innerHTML = today;
};
showDay();

//Display current time
var showTime = function() {
    for (var counter=0; counter < timeBlock.length; counter++) {
        if (currentHour > timeBlock[counter]) {
        eventEl[counter].classList.add("past");
        } else if  (currentHour < timeBlock[counter]) {
            eventEl[counter].classList.add("future");
        } else {
            eventEl[counter].classList.add("present");
        }
    }
};
console.log(showTime);
// Create a variable to local storage the data
var storeEvents = function(event) {
var hour = event.target.parentNode.children[0].textContent;

var events = event.target.parentNode.children[1].value;
localStorage.setItem(hour, events);

};


//Create variable to save and delete functions
var storeBtnEl = document.querySelectorAll(".storeBtn");
var deleteBtnEl = document.querySelectorAll(".deleteBtn");
//add event listener to call the save and delete upon click