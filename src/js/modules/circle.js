function startCircle(countC, modal, header, dataRemove, dataRemovePrev, sectionNext) {
  let val = 0,
  duration = 100,
  thisSection = document.querySelector('section[data-circle="'+ countC +'"]'),
  svg = document.querySelector('#svg' + countC),
  circle = svg.querySelector('#bar' + countC),
  count = thisSection.querySelector('.count');
  console.log(countC);

  let startInterval = setTimeout(start, duration);

  function stop() {
    clearInterval(startInterval);
  }

  function start() {
    val++
    if(isNaN(val)) {
      val = 0;
    }
    else{
      startInterval = setTimeout(start, duration)
      let r = circle.getAttribute('r');
      let c = Math.PI*(r*2);
      if (val < 0) { val = 0;}
      if (val > 100) { val = 100;}
      if (val == 50) {
        stop();
        showModal(modal);
      };
      var pct = ((100-val)/100)*c;
      circle.style.strokeDashoffset = pct;
      count.textContent = val + "%";
      if(val == 100) {
        stop();
        changePage(header, dataRemove, dataRemovePrev, thisSection, sectionNext);
      }
    }
  }
  modal.addEventListener('click', function(e) {
    let target = e.target;
    if(target.classList.contains('modal-btn')) {
      setTimeout(start, duration);
    };
  });

}
