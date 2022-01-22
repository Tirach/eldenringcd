const countdown = () => {
  const countDate = new Date("February 25, 2022 00:00:00").getTime();
  const now = new Date().getTime();
  const gap = countDate - now;

  // 1000 milliseconds = 1 second
  const second = 1000;
  // 1 second times 60
  const minute = second * 60;
  // 60 minutes times 60
  const hour = minute * 60;
  // 60 minutes times 24
  const day = hour * 24;

  const textDay = Math.floor(gap / day);
  const textHour = Math.floor((gap % day) / hour);
  const textMinute = Math.floor((gap % hour) / minute);
  const textSecond = Math.floor((gap % minute) / second);

  document.querySelector(".day").innerText = textDay;
  document.querySelector(".hour").innerText = textHour;
  document.querySelector(".minute").innerText = textMinute;
  document.querySelector(".second").innerText = textSecond;

  if (now >= countDate) {
    document.querySelector(".dynaH2").innerText =
      "Elden Ring has been out for:";
  }
};

setInterval(countdown, 1000);

var totalImages = 19;

function randomBg() {
  var num = Math.ceil(Math.random() * totalImages);
  var imagePath = "images/eldenring" + num + ".jpg";

  document.body.style.backgroundImage = "url(" + imagePath + ")";
}

randomBg();
