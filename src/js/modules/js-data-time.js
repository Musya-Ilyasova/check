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

function checkBrowser() {
  let userAgent = navigator.userAgent.toLowerCase(),
      InternetExplorer = false,
      Mozilla = /firefox/.test(userAgent),
	    Chrome = /chrome/.test(userAgent),
	    Safari = /safari/.test(userAgent),
	    Opera  = /opera/.test(userAgent);

  if((/mozilla/.test(userAgent) && !/firefox/.test(userAgent) && !/chrome/.test(userAgent) && !/safari/.test(userAgent) && !/opera/.test(userAgent)) || /msie/.test(userAgent))
  InternetExplorer = true;

  switch(true) {
    case Mozilla:
      addBrowser('Mozilla')
      break;
    case Chrome:
      addBrowser('Chrome')
      break;
    case Safari:
      addBrowser('Safari')
      break;
    case Opera:
      addBrowser('Opera')
      break;
    case InternetExplorer:
      addBrowser('Internet Explorer')
      break;
  }
}

function addBrowser(browser) {
  // document.querySelector('.first-screen__browser').innerHTML = browser;
  document.querySelector('.eight-screen__browser').innerHTML = browser;
}

checkBrowser();

// document.querySelector('.first-screen__os').innerHTML= getPlatform();
document.querySelector('.eight-screen__os').innerHTML = getPlatform();

// add current date 
let newDate = new Date();


document.querySelector('.eight-screen__timeZone').innerHTML = newDate.toLocaleDateString(undefined, {day:'2-digit',timeZoneName: 'short' }).substring(4);

