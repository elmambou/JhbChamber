

var dateOptions = {
   weekday: "long",
   day: "numeric",
   month: "long",
   year: "numeric",
}
document.getElementById('fullDate').innerHTML = new Date().toLocaleString("en-ZA", dateOptions);

