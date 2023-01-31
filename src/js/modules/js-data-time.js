// add ip 
fetch('https://ipapi.co/json/')
  .then(d => d.json())
  .then(d => {
    document.querySelector('.first-screen__ip').innerHTML = d.ip
    document.querySelector('.eight-screen__ip').innerHTML = d.ip
  })

// add platform

var userDeviceArray = [
  {device: 'Android', platform: /Android/},
  {device: 'iPhone', platform: /iPhone/},
  {device: 'iPad', platform: /iPad/},
  {device: 'Symbian', platform: /Symbian/},
  {device: 'Windows Phone', platform: /Windows Phone/},
  {device: 'Tablet OS', platform: /Tablet OS/},
  {device: 'Linux', platform: /Linux/},
  {device: 'Windows', platform: /Windows NT/},
  {device: 'Macintosh', platform: /Macintosh/}
];

var platform = navigator.userAgent;


function getPlatform() {
  for (var i in userDeviceArray) {
    if (userDeviceArray[i].platform.test(platform)) {
      return userDeviceArray[i].device;
    }
  }
  return 'Неизвестная платформа!' + platform;
}

document.querySelector('.first-screen__os').innerHTML= getPlatform();
document.querySelector('.eight-screen__os').innerHTML = getPlatform();
document.querySelector('.first-screen__browser').innerHTML = navigator.appCodeName;
document.querySelector('.eight-screen__browser').innerHTML = navigator.appCodeName;

// add current date 
let newDate = new Date();

// document.querySelector('.second-screen__year').innerHTML = newDate.getFullYear();

if(newDate.getTimezoneOffset() < 0) {
  document.querySelector('.first-screen__timeZone').innerHTML = `GMT + ${Math.abs(newDate.getTimezoneOffset()) / 60}:00`;
  document.querySelector('.eight-screen__timeZone').innerHTML = `GMT + ${Math.abs(newDate.getTimezoneOffset()) / 60}:00`;
} else {
  document.querySelector('.first-screen__timeZone').innerHTML = `GMT - ${newDate.getTimezoneOffset() / 60}:00`;
  document.querySelector('.eight-screen__timeZone').innerHTML = `GMT - ${newDate.getTimezoneOffset() / 60}:00`;
}
