function startCircle(countC, modal, header, section, sectionNext) {
  let val = 0,
  duration = 50,
  sectionNumber = Number(countC),
  thisSection = document.querySelector('section[data-circle="'+ String(sectionNumber) +'"]'),
  thisSectionNext = document.querySelector('section[data-remove="'+ String(Number(thisSection.dataset.remove) + 1) +'"]'),
  svg = document.querySelector('#svg' + countC),
  circle = svg.querySelector('#bar' + countC),
  count = thisSection.querySelector('.count');
  
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
      if (val < 0) { val = 0; }
      if (val > 100) { val = 100;}
      // if (val == 50) {
      //   stop();
      //   showModal(modal);
      // };
      var pct = ((100-val)/100)*c;
      circle.style.strokeDashoffset = pct;
      count.textContent = val + "%";
    }
    if(val == 100) {
      stop();
      // thisSection.style.display = "none";
      // thisSectionNext.style.display = "block";
      changePage(header, thisSection, thisSectionNext);
    }
  }
  modal.addEventListener('click', function(e) {
    let target = e.target;
    if(target.classList.contains('modal-btn')) {
      setTimeout(start, duration);
    };
  });

}


function initCircle() {
  let circles = document.querySelectorAll('svg circle[id*="bar"]');
  circles.forEach(element => {
    let r = element.getAttribute('r');
    let c = Math.PI*(r*2);
    element.style.strokeDashoffset = ((100)/100)*c;
  });
}
initCircle();