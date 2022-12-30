function clock() {
  let date = new Date();
  let hours = date.getHours();
  let mins = date.getMinutes();
  let secs = date.getSeconds();
  let meridian = hours >= 12 ? "PM" : "AM";

  if (hours > 12) hours -= 12;
  if (hours < 10) hours = `0${hours}`;
  if (mins < 10) mins = `0${mins}`;
  if (secs < 10) secs = `0${secs}`;

  document.querySelector(".time").innerHTML = hours;
  document.querySelector(".time2").innerText = mins;
  document.querySelector(".time3").innerText = secs;

  document.querySelector(".time4").innerHTML = meridian;

  if (hours >= 04 && hours < 08) {
    if (meridian == "PM") {
      eve();
    }
  }

  function eve() {
    let evetext = document.getElementsByClassName("grab");
    evetext[0].innerText = "STOP YAWNING, GET SOME TEA.. ITS JUST EVENING!";

    let evequote = document.getElementsByClassName("good");
    evequote[0].innerText = "GOOD EVENING !!";

    let eveimg = document.getElementsByClassName("last");
    eveimg[0].src = "./lunch_image.jpg";
  }

  if (hours >= 08) {
    if (meridian == "PM") {
      nyt();
    }
  }

  function nyt() {
    let nytText = document.getElementsByClassName("grab");
    nytText[0].innerText = "CLOSE YOUR EYES AND GO TO SLEEP";

    let nytquote = document.getElementsByClassName("good");
    nytquote[0].innerText = "GOOD NIGHT !!";

    let nytimg = document.getElementsByClassName("last");
    nytimg[0].src = "./goodnight_image.jpg";
  }

  if (hours >= 12 && hours <= 06) {
    if (meridian == "AM") {
      nyt();
    }
  }
}

setInterval(() => {
  clock();
  showGreetings();
}, 1000);

function showGreetings() {
  const now = new Date();
  if (now.getHours() >= 6 && now.getHours() < 12)
    greet("GOOD MORNING!! WAKE UP !!", "./component30–1.png");
  else if (now.getHours() >= 12 && now.getHours() < 16)
    greet("GOOD AFTERNOON !! TAKE SOME SLEEP", "./component31–1.jpg");
  else if (now.getHours() >= 16 && now.getHours() < 20)
    greet("GOOD EVENING !!", "./lunch_image.jpg");
  else greet("GOOD NIGHT !!", "./component31–1.jpg");
}
function greet(message, url) {
  document.querySelector(".greetings").innerText = message;
  document.querySelector(".greetings-image").src = url;
}

function alarmSet() {
  let alarmGreetings = document.querySelector(".alarm-greetings");
  let selectElement1 = document.querySelector(".c1").value;
  alarmGreetings.innerText = `Wake Up Time:${selectElement1}\n`;

  let selectElement2 = document.querySelector(".c2").value;
  alarmGreetings.innerText =
    alarmGreetings.innerText + `Lunch Time:${selectElement2}\n`;

  let selectElement3 = document.querySelector(".c3").value;
  alarmGreetings.innerText =
    alarmGreetings.innerText + `Nap Time : ${selectElement3}\n`;

  let selectElement4 = document.querySelector(".c4").value;
  alarmGreetings.innerText =
    alarmGreetings.innerText + `Night Time : ${selectElement4}`;
}
