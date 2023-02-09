
function toggleLinks() {
  var links = document.querySelectorAll(".eight-screen-footer-links a");
  links.forEach(function (item) {
    item.addEventListener('click', addData);
  });
};

function addData() {
  localStorage.setItem('deadline', window.timeItems.deadline.getTime()); 
  localStorage.setItem('timeNow', window.timeItems.timeNow); 
};

toggleLinks();

if (localStorage.getItem('deadline')) {
  var returnTime = new Date().getTime();
  if (localStorage.getItem('deadline') > returnTime) {
    document.querySelector('.third-screen').style.display='none';
    document.querySelector('.eight-screen').style.display='flex';
    window.timeItems.timeNow = localStorage.getItem('timeNow');
    window.timeItems.deadline = new Date(Number(window.timeItems.timeNow) + (localStorage.getItem('deadline') - returnTime));
    timer();
    header.style.display="none"
  } else {
    localStorage.removeItem('deadline'); 
    localStorage.removeItem('timeNow'); 
  }
} else {
  startCircle(1, header, document.querySelector('section[data-remove="2"]', ), document.querySelector('section[data-remove="3"]'));
};


