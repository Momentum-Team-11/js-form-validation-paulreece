console.log("Add validation!");
let total = document.getElementById("total");
let day = document.getElementById("days");
// let days = day.value;
let submit = document.getElementById("submit-button");
let parking = days + "*5";

submit.addEventListener("click", function (e) {
  e.preventDefault();
  let totaled = day.value * 5;
  console.log(totaled);
  total.innerHTML = "Total: $" + totaled + ".00";
});

// function validateForm()
