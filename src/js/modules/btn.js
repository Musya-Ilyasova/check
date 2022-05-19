function toggleBtn() {
  let btn = document.querySelectorAll('.btn');
  let header = document.querySelector('.header');
  let modal = document.querySelector('.modal__wrapper');
  btn.forEach((item) => {
    item.addEventListener('click', function(e) {
      e.preventDefault();
      let section = document.querySelector('section[data-remove="'+ item.dataset.remove+'"]');
      let sectionNext = document.querySelector('section[data-remove="'+ String(Number(item.dataset.remove) + 1) +'"]');

      let dataRemove = sectionNext.dataset.remove,
      dataRemovePrev = section.dataset.remove;
      changePage(header, dataRemove, dataRemovePrev, section, sectionNext);
      if(item.getAttribute('data-circle')) {
        let countC = item.getAttribute('data-circle');
        startCircle(countC, modal, header, dataRemove, dataRemovePrev, section);
      };
    })
  })
}

function changePage(header, dataRemove, dataRemovePrev, section, sectionNext) {
  let dataSection = sectionNext.dataset.section;
  let dataSectionPrev = section.dataset.section;
  let itemH = header.querySelector('.header-list__item[data-item="'+ dataSectionPrev + '"]');
  section.style.display = "none";
  sectionNext.style.display = "block";
  if (sectionNext.classList.contains('second-screen')) {
    header.style.opacity = "1";
    itemH.classList.add("check");
  } else {
    let itemPrev = header.querySelector('.header-list__item[data-item="'+ dataSectionPrev + '"]');
    let linePrev = header.querySelector('.header-list__line[data-item="'+ dataSectionPrev + '"]');
    itemH.classList.add("check");
    itemPrev.classList.add("active");
    linePrev.classList.add("active");
  }
}

toggleBtn();
