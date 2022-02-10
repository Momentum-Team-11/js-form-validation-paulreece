console.log("Add validation!");
let total = document.getElementById("total");
let day = document.getElementById("days");
// let days = day.value;
let submit = document.getElementById("submit-button");
let parking = days + "*5";
let date = document.getElementById("start-date");
let startD = document.getElementById("start-date");

submit.addEventListener("click", function (e) {
  let d = new Date(startD.value);
  let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  let weekDay = ["Mon", "Tue", "Wed", "Thu"];
  let dayName = days[d.getDay(startD)];
  console.log(dayName);
  if (weekDay.includes(dayName)) {
    let totaled = day.value * 5;
    total.innerHTML = "Total: $" + totaled + ".00";
  } else {
    let totaley = day.value * 7;
    total.innerHTML = "Total: $" + totaley + ".00";
  }
});

// function validateForm()
// e.preventDefault();

// (dayName.value === "Fri" || "Sat" || "Sun")
