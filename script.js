let total = document.getElementById("total");
let day = document.getElementById("days");
let submit = document.getElementById("submit-button");
let parking = days + "*5";
let date = document.getElementById("start-date");
let startD = document.getElementById("start-date");
let form = document.getElementById("parking-form");
let cvv = document.getElementById("cvv");
let today = new Date();
let carYear = document.getElementById("car-year");
let cy = new Date().getFullYear();
let exY = cy.toString().slice(-2);
let exD = new Date().getMonth();
let expDate = document.getElementById("expiration");
const e = new Date();
const months = {
  0: "01",
  1: "02",
  2: "03",
  3: "04",
  4: "05",
  5: "06",
  6: "07",
  7: "08",
  8: "09",
  9: "10",
  10: "11",
  11: "12",
};
const monthIndex = e.getMonth();
const monthName = months[monthIndex];
let expyD = monthName + exY;

console.log(expDate);

// expDate.addEventListener("keyboard", function () {});

let minDate = new Date(today.setDate(today.getDate() + 1))
  .toISOString()
  .split("T")[0];
console.log(minDate);

date.setAttribute("min", minDate);

carYear.setAttribute("max", cy);

// expDate.setAttribute("min", expyD);

function validateCardNumber(number) {
  var regex = new RegExp("^[0-9]{16}$");
  if (!regex.test(number)) return false;

  return luhnCheck(number);
}

function luhnCheck(val) {
  var sum = 0;
  for (var i = 0; i < val.length; i++) {
    var intVal = parseInt(val.substr(i, 1));
    if (i % 2 == 0) {
      intVal *= 2;
      if (intVal > 9) {
        intVal = 1 + (intVal % 10);
      }
    }
    sum += intVal;
  }
  return sum % 10 == 0;
}

submit.addEventListener("click", function () {
  let d = new Date(startD.value);
  let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  let weekDay = ["Mon", "Tue", "Wed", "Thu"];
  let dayName = days[d.getDay(startD)];
  let cnum = document.getElementById("credit-card").value;
  console.log(dayName);

  if (day.value > 30) {
    console.log("invalid");
  } else if (day.value < 1) {
    console.log("invalid");
  } else {
    if (weekDay.includes(dayName)) {
      let totaled = day.value * 5;
      total.innerHTML = "Total: $" + totaled + ".00";
    } else {
      let totaley = day.value * 7;
      total.innerHTML = "Total: $" + totaley + ".00";
    }
  }
  let mon = expDate.value.slice(0, 2);
  let yea = expDate.value.slice(2);

  console.log(mon);
  console.log(yea);
  {
    if (mon > 12) {
      expDate.setCustomValidity("Month must be between 01-12.");
    } else if (mon < monthName) {
      expDate.setCustomValidity("Month must be current month or later.");
    } else if (yea < 22) {
      expDate.setCustomValidity("Year must be this year or later.");
    } else {
      expDate.setCustomValidity("");
    }
  }
  validateCardNumber(cnum);
});

// function validateForm()
// e.preventDefault();

// (dayName.value === "Fri" || "Sat" || "Sun")
