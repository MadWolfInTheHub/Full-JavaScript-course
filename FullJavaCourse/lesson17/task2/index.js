const callbackPrompt = {
  message: `What's your phone number?`,
  showPrompt() {
    const phoneNumber = prompt(this.message);
    console.log(phoneNumber);
  },
  showDeferredPrompt(ms) {
    setTimeout(() => this.showPrompt(), ms);
  }
};

callbackPrompt.showDeferredPrompt(3000);