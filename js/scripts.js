   document.addEventListener("DOMContentLoaded", function getMobileOperatingSystem() {
   	var userAgent = navigator.userAgent || navigator.vendor || window.opera;
   	var downloadButton = document.querySelector('.download-app');
   	var popup = document.querySelector(".download--popup");
   	if (/android/i.test(userAgent)) {
   		downloadButton.setAttribute('href', 'https://play.google.com/store/apps/details?id=ua.com.uklontaxi&hl=ru');
   	}
   	if (/iPhone|iPod|iPad/.test(userAgent) && !window.MSStream) {
   		downloadButton.setAttribute('href', 'https://itunes.apple.com/us/app/uklon/id654646098?mt=8');
   	} else {
   		document.querySelector('.download-app').onclick = function() {
   			popup.classList.add("show");
   			setTimeout(function() {
   				popup.classList.remove("show");
   			}, 3000);
   		}
   	}
   });
   document.addEventListener("DOMContentLoaded", function modalWindow() {
   	var url = document.querySelector('.video--modal iframe').src
   	document.querySelector('.play--video').onclick = function() {
   		document.querySelector('.video--modal').className += " open ";
   		document.querySelector('.video--modal iframe').setAttribute('src', url);
   	}
   	document.querySelector('.close--modal').onclick = function() {
   		document.querySelector('.video--modal').classList.remove("open");
   		document.querySelector('.video--modal iframe').setAttribute('src', '');
   	}
   });
