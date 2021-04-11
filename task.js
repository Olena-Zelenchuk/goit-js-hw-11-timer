class CounDownTimer {
  constructor({ selector, targetDate }) {
    this.element = document.querySelector(selector);
    this.targetDate = targetDate.getTime();
  }
    
    timer() { setInterval(() => {const currentDate = Date.now();
        const deltaTime = this.targetDate - currentDate;
        const time = this.getTimerComponents(deltaTime);}, 1000)
        }
  
    getTimerComponents(time) {
        const days = this.pad(Math.floor(time / (1000 * 60 * 60 * 24)));
        const hours = this.pad(Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
        const mins = this.pad(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));
        const secs = this.pad(Math.floor((time % (1000 * 60)) / 1000));
        return { days, hours, mins, secs };
    }

    renderTimer() {
        
      setInterval(() => {console.log(`${this.days} : ${this.hours} : ${this.mins} :${this.secs}`);}, 1000)
    
  }
    
  pad(value) {
    return String(value).padStart(2, '0')
  };

}

const counDownTimer = new CounDownTimer ({selector: '#timer-1',
  targetDate: new Date('Apr 30, 2021'),
})
counDownTimer.timer();