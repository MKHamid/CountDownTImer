const endDate = "5 April 2025 04:04PM";
document.getElementById("endDate").innerText = endDate;
const input = document.querySelectorAll("input");

function countDown() {
  const end = new Date(endDate);
  const now = new Date();
  const diff = (end - now) / 1000; // in seconds
  if (diff < 0) return;
  input[0].value = Math.floor(diff / 3600 / 24); // days
  input[1].value = Math.floor((diff / 3600) % 24);//hours
  input[2].value = Math.floor(diff/60 % 60); // minutes
  input[3].value = Math.floor(diff % 60); // seconds
}
countDown(); //Calling the function
setInterval(() => {
  countDown();
},
  1000); //per 1 second this countdown function will be called
