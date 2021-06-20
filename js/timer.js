

export default class CountdownTimer {
  constructor({ selector, targetDate }) {
    this.selector = selector;
    this.targetDate = targetDate;
    this.intervalId = null;
    this.refs = {
  days: document.querySelector(`${this.selector} [data-value="days"]`),
  hours: document.querySelector(`${this.selector} [data-value="hours"]`),
  mins: document.querySelector(`${this.selector} [data-value="mins"]`),
  secs: document.querySelector(`${this.selector} [data-value="secs"]`),
}

    this.start();
  }
  
  start() {
    this.intervalId = setInterval(() => {
      const currentTime = Date.now();
      const time = this.targetDate.getTime() - currentTime;
      const { days, hours, mins, secs } = this.getTimeComponents(time);
      this.refs.days.textContent = days;
      this.refs.hours.textContent = hours;
      this.refs.mins.textContent= mins;
      this.refs.secs.textContent= secs;

      if (time <= 0) {
        clearInterval(intervalId);
        this.getTimeComponents(0);
      }
    }, 1000);
  }

  getTimeComponents(time) {
      const days = this.pad(Math.floor(time / (1000 * 60 * 60 * 24)));
      const hours = this.pad(Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
      const mins = this.pad(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));
      const secs = this.pad(Math.floor((time % (1000 * 60)) / 1000));

      return { days, hours, mins, secs };
  }
  pad(value) {
        return String(value).padStart(2, '0');
      }
  
}