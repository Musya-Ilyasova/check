  let texts = ['Scanning your networks', 'Detecting leaks in your connection', 'Finishing the scan']
  
  function showModal(modal, thisText, sectionNumber) {
    let modalBtn = document.querySelectorAll('.modal-btn');
    modal.classList.add('active');
    modalBtn.forEach((item) => {
      thisText.textContent = texts[sectionNumber-1];
      item.addEventListener('click', function(e) {
        e.preventDefault();
        modal.classList.remove('active');
      })
    });
  };



