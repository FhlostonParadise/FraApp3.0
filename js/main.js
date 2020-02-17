// 02-17-20 (Background Image)
function randomImage(){
  var images = [
   '/img/bg.jpg',
   '/img/bg1.jpg',
   '/img/bg2.jpg',
   '/img/bg3.jpg',
   '/img/bg4.jpg',
   '/img/bg5.jpg',
   '/img/bg6.jpg'];
  var size = images.length;
  var x = Math.floor(size * Math.random());
  console.log(x);
  var element = document.getElementsByClassName('bgImage');
  element[0].style["background"] = "url('"+ images[x] + "')";
}

document.addEventListener("DOMContentLoaded", randomImage);








/* // DOM Elements
const time = document.getElementById('time'),
document.body.style.backgroundImage=bigSize[randomNumber],
// Options
showAmPm = true;
// document.body.style.backgroundImage = "url('img/bg.jpg')";
// Show Time
function showTime() {
  let today = new Date(),
    hour = today.getHours(),
    min = today.getMinutes();

  // Set AM or PM
  const amPm = hour >= 12 ? 'PM' : 'AM';

  // 12hr Format
  hour = hour % 12 || 12;

  // Output Time
  time.innerHTML = `${hour}<span>:</span>${addZero(min)}
  ${showAmPm ? amPm : ''}`;

  setTimeout(showTime, 1000);
}

// Add Zeros
function addZero(n) {
  return (parseInt(n, 10) < 10 ? '0' : '') + n;
}

d = new Date();
document.getElementById("dateString").innerHTML = d.toDateString();

var randomNumber = Math.floor(Math.random() * 6) + 0;
var bigSize = ["url('/img/bg.jpg')", "url('/img/bg1.jpg')", "url('/img/bg2.jpg')", "url('/img/bg3.jpg')", "url('/img/bg4.jpg')", "url('/img/bg5.jpg')", "url('/img/bg6.jpg')", "url('/img/bg7.jpg')"];
// Run
showTime();
 */