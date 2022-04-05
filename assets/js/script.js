var currentDayEl = document.querySelector("#currentDay");

//Estimate working hours 9am-5pm
var timeBlock = [9, 10, 11, 12, 1, 2, 3, 4, 5];

// create a variable to show present past and future tasks
var taskContainerEl =document.querySelector(".container");
var eventsEl = document.querySelectorAll(".events");

//Create variables to store current date and time using moment.js
var currentHour = (moment().format('LLLL'));


//Create variables to show current date and time using moment.js
var showDay = function () {
var today = moment().format('MMMM Do YYYY, h:mm:ss a');
currentDayEl.innerHTML = today;
};
showDay();

//Display current time
var showTime = function() {
    for (var counter = 0; counter < timeBlock.length; counter++) {
        if (currentHour > timeBlock[counter]) {
        eventsEl[counter].classList.add("past");
        } else if  (currentHour < timeBlock[counter]) {
            eventsEl[counter].classList.add("future");
        } else {
            eventsEl[counter].classList.add("present");
        }
    }
};
    
showTime();

// Create a variable to set item in local storage
var storeEvents = function(event) {
var hours = event.target.parentNode.children[0].textContent;

var events = event.target.parentNode.children[1].value;
localStorage.setItem(hours, events);
};
// Create a variable to get item from local storage

var getTask = function() {
    for(var counter = 0; counter < eventsEl.length ; counter++) {
        var hours = eventsEl[counter].parentNode.children[0].textContent;
    var storeValue = localStorage.getItem(hours);
    eventsEl[counter].textContent = storeValue;
    }
};
getTask();

//Create variable to save and delete functions
var storeBtnEl = document.querySelectorAll(".storeBtn");
var deleteBtnEl = document.querySelectorAll(".deleteBtn");

//add event listener to call the save and delete upon click
var clickEvents = function() {
    for (var counter = 0; counter < storeBtnEl.length; counter++) {
    storeBtnEl[counter].addEventListener("click", storeEvents);
    }
};
clickEvents();
