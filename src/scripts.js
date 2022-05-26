const secondsHand = document.querySelector(".hand.seconds");
const minutesHand = document.querySelector(".hand.minutes");
const hoursHand = document.querySelector(".hand.hours");

const setRotation = (element, rotationPercentage) => {
  element.style.setProperty("--rotation", rotationPercentage * 360);
};

const setClock = () => {
  const correntDate = new Date();

  const secondsPercentage = correntDate.getSeconds() / 60;
  const minutesPercentage = (secondsPercentage + correntDate.getMinutes()) / 60;
  const hoursPercentage = (minutesPercentage + correntDate.getHours()) / 12;

  setRotation(secondsHand, secondsPercentage);
  setRotation(minutesHand, minutesPercentage);
  setRotation(hoursHand, hoursPercentage);
};

setClock();

setInterval(setClock, 1000);
