function showModal(modal) {
  let modalBtn = document.querySelectorAll('.modal-btn');
  modal.classList.add('active');
  modalBtn.forEach((item) => {
    item.addEventListener('click', function(e) {
      e.preventDefault();
      modal.classList.remove('active');
    })
  });

};



