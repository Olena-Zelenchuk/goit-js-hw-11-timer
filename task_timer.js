"use strict";

const refs = {
  days: document.querySelector('[data-value="days"]'),
  hours: document.querySelector('[data-value="hours"]'),
  minutes: document.querySelector('[data-value="mins"]'),
  secs: document.querySelector('[data-value="secs"]'),
};

const getTimer = () => {
  const pad = (value) => {
    return String(value).padStart(2, "0");
  };

  const targetDate = new Date(2021, 1, 14, 12, 0, 0).getTime();
  const currentDate = Date.now();
  const deltaTime = targetDate - currentDate;
  //   console.log(deltaTime);

  const days = pad(Math.floor(deltaTime / 1000 / 60 / 60 / 24));
  const hours = pad(
    Math.floor((deltaTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
  );
  const mins = pad(Math.floor((deltaTime % (1000 * 60 * 60)) / (1000 * 60)));
  const seconds = pad(Math.floor((deltaTime % (1000 * 60)) / 1000));

  refs.days.textContent = days;
  refs.hours.textContent = hours;
  refs.minutes.textContent = mins;
  refs.secs.textContent = seconds;
};
setInterval(getTimer, 1000);
