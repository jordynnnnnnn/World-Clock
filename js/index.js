function updateTime() {
  let amsterdamElement = document.querySelector("#amsterdam");
  if (amsterdamElement) {
    let amsterdamDate = amsterdamElement.querySelector(".date");
    let amsterdamTime = amsterdamElement.querySelector(".time");
    amsterdamDate.innerHTML = moment()
      .tz("Europe/Amsterdam")
      .format("MMMM Do YYYY");
    amsterdamTime.innerHTML = `${moment()
      .tz("Europe/Amsterdam")
      .format("h:mm:ss [<small>]A[</small>]")}`;
  }

  let adelaideElement = document.querySelector("#adelaide");
  if (adelaideElement) {
    let adelaideDate = adelaideElement.querySelector(".date");
    let adelaideTime = adelaideElement.querySelector(".time");
    adelaideDate.innerHTML = moment()
      .tz("Australia/Adelaide")
      .format("MMMM Do YYYY");
    adelaideTime.innerHTML = `${moment()
      .tz("Australia/Adelaide")
      .format("h:mm:ss [<small>]A[</small>]")}`;
  }
}

function updateCity(event) {
  let cityTimeZone = event.target.value;
  if (cityTimeZone === "current") {
    cityTimeZone = moment.tz.guess();
    let cityName = cityTimeZone.replace("_", " ").split("/")[1];
    let cityTime = moment().tz(cityTimeZone);
    let citiesSelect = document.querySelector("#cities");
    citiesSelect.innerHTML = `<div class="city">
    <div>
      <h2>${cityName}</h2>
      <div class="date">${cityTime.format("MMMM Do YYYY")}</div>
    </div>
    <div class="time">${cityTime.format("h:mm:ss [<small>]A[</small>]")}</div>
  </div>`;
  }
}

setInterval(updateTime, 1000);

let citiesSelect = document.querySelector("#city");
citiesSelect.addEventListener("change", updateCity);
