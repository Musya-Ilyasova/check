function addTimerItems() {
  window.timeItems.timeNow = new Date().getTime();
  window.timeItems.deadline = new Date(window.timeItems.timeNow + 900000);
};


function timer() {
  if (!localStorage.getItem('deadline') || !localStorage.getItem('deadline') > new Date().getTime()) {
    addTimerItems();
  }
  let timerId = null;
  function countdownTimer() {
    const diff = window.timeItems.deadline - new Date();
    if (diff <= 0) {
      clearInterval(timerId);
    }
    const hours = diff > 0 ? Math.floor(diff / 1000 / 60 / 60) % 24 : 0;
    const minutes = diff > 0 ? Math.floor(diff / 1000 / 60) % 60 : 0;
    const seconds = diff > 0 ? Math.floor(diff / 1000) % 60 : 0;

    $hours.forEach((item) => item.textContent = hours < 10 ? '0' + hours : hours);
    $minutes.forEach((item) => item.textContent = minutes < 10 ? '0' + minutes : minutes);
    $seconds.forEach((item) => item.textContent = seconds < 10 ? '0' + seconds : seconds);
    if(hours===0 && minutes===0 && seconds===0) {
      addTimerItems();
      localStorage.removeItem('deadline'); 
      localStorage.removeItem('timeNow'); 
    }
  }

  const $hours = document.querySelectorAll('.hours');
  const $minutes = document.querySelectorAll('.minutes');
  const $seconds = document.querySelectorAll('.seconds');
  countdownTimer();
  timerId = setInterval(countdownTimer, 1000);
  
}




