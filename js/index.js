function updateTime() {
  let amsterdamElement = document.querySelector("#amsterdam");
  let amsterdamDate = amsterdamElement.querySelector(".date");
  let amsterdamTime = amsterdamElement.querySelector(".time");
  amsterdamDate.innerHTML = moment()
    .tz("Europe/Amsterdam")
    .format("MMMM Do YYYY");
  amsterdamTime.innerHTML = `${moment()
    .tz("Europe/Amsterdam")
    .format("h:mm:ss [<small>]A[</small>]")}`;

  let adelaideElement = document.querySelector("#adelaide");
  let adelaideDate = adelaideElement.querySelector(".date");
  let adelaideTime = adelaideElement.querySelector(".time");
  adelaideDate.innerHTML = moment()
    .tz("Australia/Adelaide")
    .format("MMMM Do YYYY");
  adelaideTime.innerHTML = `${moment()
    .tz("Australia/Adelaide")
    .format("h:mm:ss [<small>]A[</small>]")}`;
}

setInterval(updateTime, 1000);
