function toggleBtn() {
  let btn = document.querySelectorAll('.btn[data-remove]');
  let header = document.querySelector('.header');
  let modal = document.querySelector('.modal__wrapper');
  btn.forEach((item) => {
    item.addEventListener('click', function(e) {
      e.preventDefault();
      let section = document.querySelector('section[data-remove="'+ item.dataset.remove+'"]');
      let sectionNext = document.querySelector('section[data-remove="'+ String(Number(item.dataset.remove) + 1) +'"]'); 

      section.style.display = "none";
      sectionNext.style.display = "block";

      if(item.getAttribute('data-circle')) {
        let countC = item.getAttribute('data-circle');
        startCircle(countC, modal, header, section, sectionNext);
      };
      changePage(header, section, sectionNext);
    })
  })
}
function changePage(header, section, sectionNext) {
  let dataSection = section.dataset.section;
  let dataSectionNext = sectionNext.dataset.section;
  let itemH = header.querySelectorAll('.header-list__item[data-item="'+ dataSectionNext + '"]');
  section.style.display = "none";
  sectionNext.style.display = "block";
  if (sectionNext.dataset.remove == '2') {
    header.style.opacity = "1";
    itemH.forEach((item) => item.classList.add("check"));
  } else if (sectionNext.dataset.remove == '8') {
    header.style.display="none";
    timer();
  } else {
    let itemPrev = header.querySelectorAll('.header-list__item[data-item="'+ dataSection + '"]');
    let linePrev = header.querySelectorAll('.header-list__line[data-item="'+ dataSection + '"]');
    itemH.forEach((item) => item.classList.add("check"));
    itemPrev.forEach((item) => item.classList.add("active"));
    linePrev.forEach((item) => item.classList.add("active"));
  }
}

toggleBtn();
