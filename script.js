function time() {
  let time = new Date();
  let hour = time.getHours();
  let minute = time.getMinutes();
  let second = time.getSeconds();
  let ampm = "AM";
  if (hour > 12) {
    ampm = "PM";
  }
  if (hour < 10) {
    hour = "0" + hour;
  }
  if (minute < 10) {
    minute = "0" + minute;
  }
  if (second < 10) {
    second = "0" + second;
  }

  let currentT = hour + ":" + minute + ":" + second + " " + ampm;
  document.getElementById("time").innerHTML = currentT;
}
setInterval(time, 1000);
time();
