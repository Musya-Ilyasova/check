function startCircle(countC, header, section, sectionNext) {
  let val = 0,
  duration = 30,
  sectionNumber = Number(countC),
  thisSection = document.querySelector('section[data-circle="'+ String(sectionNumber) +'"]'),
  thisSectionNext = document.querySelector('section[data-remove="'+ String(Number(thisSection.dataset.remove) + 1) +'"]'),
  thisModal = document.querySelector('.modal__wrapper.modal-'+countC),
  svg = document.querySelector('#svg' + countC),
  circle = svg.querySelector('#bar' + countC),
  count = thisSection.querySelector('.count');

  let startInterval = setTimeout(start, duration);

  function stop() {
    clearTimeout(startInterval);
  }

  function start() {
    val++
    if(isNaN(val)) {
      val = 0;
    } else {
      startInterval = setTimeout(start, duration)
      let r = circle.getAttribute('r');
      let c = Math.PI*(r*2);
      if (val < 0) { val = 0; }
      if (val > 100) { val = 100;}
      if (val == 50) {
        stop();
        showModal(thisModal);
      };
      var pct = ((100-val)/100)*c;
      circle.style.strokeDashoffset = pct;
      count.textContent = val + "%";
    }

    if(val == 100) {
      stop();
      changePage(header, thisSection, thisSectionNext);
    }
  }
  thisModal.addEventListener('click', function(e) {
    let target = e.target;
    if(target.classList.contains('modal-btn')) {
      start();
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
