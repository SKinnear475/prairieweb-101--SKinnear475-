// Get the form and the message paragraph from the page
const form = document.getElementById("contact-form");
const formMessage = document.getElementById("form-message");

// Run this code when the user clicks Send
// (the browser checks the required fields and the email shape first)
form.addEventListener("submit", function (event) {
  // Stop the page from reloading
  event.preventDefault();

  // Read what the user typed or picked
  const name = document.getElementById("name").value;
  const trailLength = document.getElementById("trail-length").value;

  // Show a thank-you message on the page
  formMessage.textContent =
    "Thanks, " + name + "! We got your message. Trail length: " + trailLength + ".";

  // Clear the form so it is ready for another message
  form.reset();
});


// Assessment 3: live weather

// Find the paragraph where the weather will be shown
const weatherMessage = document.getElementById("weather-message");

// Open-Meteo weather API (free, no key). Latitude and longitude are for Fish Creek.
const weatherUrl =
  "https://api.open-meteo.com/v1/forecast?latitude=50.93&longitude=-114.00" +
  "&current=temperature_2m,wind_speed_10m";

// Get the weather, then show it on the page
async function showWeather() {
  try {
    // Ask the weather API for the data
    const response = await fetch(weatherUrl);

    // If the server answered with an error, jump to catch
    if (!response.ok) {
      throw new Error("Weather request failed");
    }

    // Turn the answer into a JavaScript object
    const data = await response.json();

    // Pull out the numbers we need
    const temperature = data.current.temperature_2m;
    const wind = data.current.wind_speed_10m;

    // Show them on the page
    weatherMessage.textContent =
      "Temperature: " + temperature + " °C. Wind: " + wind + " km/h.";
  } catch (error) {
    // Message if the network or the API fails
    weatherMessage.textContent =
      "Sorry, we can't load the weather right now. Please check again later.";
  }
}

// Run it when the page loads
showWeather();