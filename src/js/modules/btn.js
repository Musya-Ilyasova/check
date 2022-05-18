function toggleBtn() {
  let btn = document.querySelectorAll('.btn');
  btn.forEach((item) => {
    item.addEventListener('click', function(e) {
      e.preventDefault();
      this.parentNode.parentNode.style.display = "none";
    })
  })
}
toggleBtn();
