"use strict";

// prettier-ignore
const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

const form = document.querySelector(".form");
const containerWorkouts = document.querySelector(".workouts");
const inputType = document.querySelector(".form__input--type");
const inputDistance = document.querySelector(".form__input--distance");
const inputDuration = document.querySelector(".form__input--duration");
const inputCadence = document.querySelector(".form__input--cadence");
const inputElevation = document.querySelector(".form__input--elevation");

/* check geolocator exists */
if (navigator.geolocation) {
  /* Geolocation API = browser API getCurrentPosition -> this function takes as an input two callback
functions will be called on success. */
  /* Whenever the browser successfully gets co-ordinates of the current position of the user AND the 
second callback = error callback -> will be called if error getting co ordinations */
  navigator.geolocation.getCurrentPosition(
    /* success callback -> called with a parameter called position parameter. Can give it any name we 
  want. It is JavaScript who will call this function in case of success, and it will pass in an 
  argument and we can then use that. */
    function (position) {
      /* for now, log position to the console */
      console.log(position);
    },
    function () {
      alert("Could not get your position");
    }
  );
}
