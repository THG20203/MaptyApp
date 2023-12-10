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
      /* using destructuring -> create variable called latitude based out of the latitude property 
      of this object. */
      const { latitude } = position.coords;
      const { longitude } = position.coords;

      /* code for when browser is successful with coordinates */
      /* L is main function leaflet gives us as an entry point. L has couple of methods we can use
      like map. */
      const map = L.map("map").setView([51.505, -0.09], 13);

      L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
        attribution:
          '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
      }).addTo(map);

      L.marker([51.5, -0.09])
        .addTo(map)
        .bindPopup("A pretty CSS popup.<br> Easily customizable.")
        .openPopup();
    },
    function () {
      alert("Could not get your position");
    }
  );
}
