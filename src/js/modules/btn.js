let header = document.querySelector('.header');
function toggleBtn() {
  let btn = document.querySelectorAll('.btn[data-remove]');
  btn.forEach((item) => {
    item.addEventListener('click', function(e) {
      e.preventDefault();
      let section = document.querySelector('section[data-remove="'+ item.dataset.remove+'"]');
      let sectionNext = document.querySelector('section[data-remove="'+ String(Number(item.dataset.remove) + 1) +'"]');

      section.style.display = "none";
      sectionNext.style.display = "block";

      if(item.getAttribute('data-circle')) {
        let countC = item.getAttribute('data-circle');
        startCircle(countC, header, section, sectionNext);
      };
      changePage(header, section, sectionNext);
    })
  }) 
}

toggleBtn();
