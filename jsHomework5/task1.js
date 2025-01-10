function logTextAfterDelay(text, delay) {
    setTimeout(function () {
      console.log(text);
    }, delay);
  }

  logTextAfterDelay("Hello, World!", 2000);
  
  