function changePage(header, section, sectionNext) {
  let dataSection = section.dataset.section;
  let dataSectionNext = sectionNext.dataset.section;
  let itemH = header.querySelectorAll('.header-list__item[data-item="'+ dataSectionNext + '"]');
  let singleItemH = header.querySelector('.header-list__line[data-item="' + dataSectionNext + '"]');
  section.style.display = "none";
  sectionNext.style.display = "flex";
  itemH.forEach((item) => item.classList.add("check"));
  if (sectionNext.dataset.remove == '5') {
    header.style.display="none";
    timer();
  } else {
    let itemPrev = header.querySelectorAll('.header-list__item[data-item="'+ dataSection + '"]');
    let linePrev = header.querySelectorAll('.header-list__line[data-item="'+ dataSection + '"]');
    singleItemH.classList.add('active')
    itemH.forEach((item) => item.classList.add("check"));
    itemPrev.forEach((item) => item.classList.add("active"));
    linePrev.forEach((item) => item.classList.add("active"));
  }
  if(sectionNext.getAttribute('data-circle')==="2" || sectionNext.getAttribute('data-circle')==="3") {
    startCircle(Number(sectionNext.getAttribute('data-circle')), header, sectionNext, document.querySelector('section[data-remove="'+ String(Number(sectionNext.dataset.remove) + 1) +'"]'));
  }
}