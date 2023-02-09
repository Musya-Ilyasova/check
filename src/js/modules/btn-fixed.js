function btnFixed () {
  let btn = document.querySelector('.btn-fixed');
  let section = document.querySelector('.eight-screen');
  btn.addEventListener('click', function(e) {
    e.preventDefault();
    const blockID = btn.getAttribute('href').substr(1);
    let elem = document.getElementById(blockID),
    elemY = elem.getBoundingClientRect().top,
    elemH = elem.clientHeight,
    wHeight = document.documentElement.clientHeight,
    height = (wHeight - elemH) / 2,
    scrollheight = elemY - height;
    section.scrollBy({
      top: scrollheight,
      left: 0,
      behavior: 'smooth'
    });
  })
}

function scrollSection() {
  let btn = document.querySelector('.btn-fixed');
  let el = document.querySelector('.pay-form__wrapper');
  let section = document.querySelector('.eight-screen');
  section.addEventListener('scroll', function() {
    if((el.getBoundingClientRect().y + el.getBoundingClientRect().height/2) <= window.screen.height) {
      btn.classList.add('hide');
    } else {
      if(btn.classList.contains('hide')) {
        btn.classList.remove('hide');
      }
    }
  });
}
scrollSection();
btnFixed ();
