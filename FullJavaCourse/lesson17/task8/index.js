const timer = {
  secondsPased: 0,
  minsPassed: 0,
  interval: null,
  startTimer() {
    setInterval(() => {
        this.secondsPased +=1
    }, 1000);
  },
  },
  stopTimer() {
    setTimeout(() => {
      clearInterval(this.startTimer);
      alert("stop");
    }, 0);
  },
};

timer.startTimer();
timer.stopTimer();
console.log(timer.secondsPased)