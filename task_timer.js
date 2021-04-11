class CounDownTimer {
  constructor({ selector, targetDate }) {
    this.element = document.querySelector(selector);
    this.targetDate = targetDate.getTime();
  }
  
  timer() {
    setInterval(() => {
     
    const currentDate = Date.now();
      const deltaTime = this.targetDate - currentDate;
      
    const days = this.pad(Math.floor(deltaTime / (1000 * 60 * 60 * 24)));
    const hours = this.pad(Math.floor((deltaTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
    const mins = this.pad(Math.floor((deltaTime % (1000 * 60 * 60)) / (1000 * 60)));
    const secs = this.pad(Math.floor((deltaTime % (1000 * 60)) / 1000));
    
      this.element.innerHTML = `
  <div class="field">
  <span class="value" data-value="days">${days}</span>
  <span class="label">Days</span>
  </div>

  <div class="field">
  <span class="value" data-value="hours">${hours}</span>
  <span class="label">Hours</span>
  </div>

  <div class="field">
  <span class="value" data-value="mins">${mins}</span>
  <span class="label">Minutes</span>
  </div>

  <div class="field">
  <span class="value" data-value="secs">${secs}</span>
  <span class="label">Seconds</span>
  </div>`
    },
      1000)
  }
  
  pad(value) {
    return String(value).padStart(2, '0')
  };

}

const counDownTimer = new CounDownTimer ({selector: '#timer-1',
  targetDate: new Date('Apr 30, 2021'),
})
counDownTimer.timer();






 





 

