


export default function CountdownTimer({ selector, targetDate }) {
  
const refs = {
  days: document.querySelector(`${selector} [data-value="days"]`),
  hours: document.querySelector(`${selector} [data-value="hours"]`),
  mins: document.querySelector(`${selector} [data-value="mins"]`),
  secs: document.querySelector(`${selector} [data-value="secs"]`),
}

const intervalId = setInterval(() => {
      const currentTime = Date.now();
      const time = targetDate - currentTime;
    const {days, hours, mins, secs } = getTimeComponents(time);
    refs.days.textContent = days;
    refs.hours.textContent = hours;
    refs.mins.textContent = mins;
  refs.secs.textContent = secs;
  if ({days, hours, mins, secs } < 10) {
    refs.days.textContent = days;
    refs.hours.textContent = '0' + hours;
    refs.mins.textContent = '0' + mins;
  refs.secs.textContent = `0{secs}`;
  }

    if (time <= 0) {
      clearInterval(this.intervalId);
      // refs.days.textContent = '00';
      // refs.hours.textContent = '00';
      // refs.mins.textContent = '00';
      // refs.secs.textContent = '00';
    }
    }, 1000);

  const getTimeComponents = (time) => {
    const days = pad(Math.floor(time / (1000 * 60 * 60 * 24)));
    const hours = pad(Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
    const mins = pad(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));
    const secs = pad(Math.floor((time % (1000 * 60)) / 1000));

    return { days, hours, mins, secs };
  }
  function pad (value) {
    return String(value).padStart(2, '0');
  }
}