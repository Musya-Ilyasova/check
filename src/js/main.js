@@include('modules/js-data-time.js');

window.timeItems = {
  timeNow: "",
  deadline: ""
}
document.addEventListener('DOMContentLoaded', function() {
  @@include('modules/svg.js');
  @@include('modules/polyfills.js');
  @@include('modules/modal.js');
  @@include('modules/circle.js');
  @@include('modules/timer.js');
  @@include('modules/btn.js');
  @@include('modules/change-page.js');
  @@include('modules/btn-fixed.js');
  @@include('modules/local-storage.js');
});
