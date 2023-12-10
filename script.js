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

      const coords = [latitude, longitude];

      /* code for when browser is successful with coordinates */
      /* L is main function leaflet gives us as an entry point. L has couple of methods we can use
      like map, another = tilelayer -> define tiles of map. Also can display markers */
      /* number after coords array we've added is the zoom level of the map */
      const map = L.map("map").setView(coords, 13);
      console.log(map);

      /* map we see on page made up of small tiles, tiles come from url here, which is from 
      openstreetmap. */
      L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
        attribution:
          '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
      }).addTo(map);

      /* onto map object above can add event listener - type of event click, and callback function.
      When leaflet calls this function, will do so with special mapEvent - created by leaflet. */
      map.on("click", function (mapEvent) {
        form.classList.remove("hidden");

        /* destructure to get latitude and longitude of this object. Remember latlng part of mapEvent object
        when looked at console */
        // const { lat, lng } = mapEvent.latlng;

        /* Using lat, lng  from above */
        // L.marker([lat, lng])
        //  .addTo(map)
        //  .bindPopup(
        //   L.popup({
        //      maxWidth: 250,
        //      minWidth: 100,
        /* autoClose overrides the default behavior of popup closing when another popup is opened so
              overwriting that */
        //      autoClose: false,
        /* closeOnClick -> prevent popup whenever user clicks on map so make false */
        //      closeOnClick: false,
        //      className: "running-popup",
        //    })
        // )
        //  .setPopupContent("Workout")
        //  .openPopup();
      });
    },
    function () {
      alert("Could not get your position");
    }
  );
}
