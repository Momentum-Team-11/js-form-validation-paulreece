let total = document.getElementById("total");
let day = document.getElementById("days");
let submit = document.getElementById("submit-button");
let parking = days + "*5";
let date = document.getElementById("start-date");
let startD = document.getElementById("start-date");
let form = document.getElementById("parking-form");
let cvv = document.getElementById("cvv");
let today = new Date();

let minDate = new Date(today.setDate(today.getDate() + 1))
  .toISOString()
  .split("T")[0];
console.log(minDate);

date.setAttribute("min", minDate);

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
  if (weekDay.includes(dayName)) {
    let totaled = day.value * 5;
    total.innerHTML = "Total: $" + totaled + ".00";
  } else {
    let totaley = day.value * 7;
    total.innerHTML = "Total: $" + totaley + ".00";
  }
  validateCardNumber(cnum);
});

// function validateForm()
// e.preventDefault();

// (dayName.value === "Fri" || "Sat" || "Sun")
