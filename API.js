export async function getTimeOfCity(cityName) {
  try {
    let response = await fetch("http://worldtimeapi.org/api/timezone");

    // Parse the response as JSON
    let data = await response.json();

    // Find the continent that the city belongs to
    let cityInfo = data.find((info) => info.includes(cityName));

    let continent = cityInfo.split("/")[0];

    // Build the URL for the API request for the city's timezone
    let timeUrl = `http://worldtimeapi.org/api/timezone/${continent}/${cityName}`;

    // Make the API request for the city's timezone
    let timeResponse = await fetch(timeUrl);

    // Parse the response as JSON
    let timeData = await timeResponse.json();

    // Return the current time in the city
    return timeData.datetime;
  } catch (error) {
    // log any errors to the console
    console.error("Error fetching data:", error);
    alert(
      "API  fetching time zones & times around the world unavailable! Please refresh the page or try again in a few seconds."
    );

    return "ERROR FETCHING DATA";
  }
}

export async function fetchCities() {
  try {
    let countries = [];
    // fetch the response from the API
    let response = await fetch("http://worldtimeapi.org/api/timezone");

    let regex = /([^/]*)$/; //regex to filter cities

    // parse the response as JSON
    let data = await response.json();

    // extract the city names from the response data
    let cities = data.map(function (item) {
      return item.match(regex)[1];
    });

    cities.forEach(function (city) {
      if (
        city !== undefined &&
        !city.includes("GMT") &&
        !city.includes("UTC")
      ) {
        countries.push(city);
      }
    });
    return countries;
  } catch (error) {
    // log any errors to the console
    console.error("Error fetching data:", error);
    alert(
      "API  fetching time zones & times around the world unavailable! Please refresh the page or try again in a few seconds."
    );

    return "ERROR FETCHING DATA";
  }
}
