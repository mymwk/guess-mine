(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";

require("./login");
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZha2VfYzQ2M2E3Y2YuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBcIi4vbG9naW5cIjtcbiJdfQ==
},{"./login":2}],2:[function(require,module,exports){
"use strict";

var body = document.querySelector("body");
var loginForm = document.getElementById("jsLogin");
var NICKNAME = "nickname";
var LOGGED_OUT = "loggedOut";
var LOGGED_IN = "loggedIn";
var nickName = localStorage.getItem(NICKNAME);

if (nickName === null) {
  body.className = LOGGED_OUT;
} else {
  body.className = LOGGED_IN;
  logIn(nickName);
}

var logIn = function logIn(nickname) {
  // eslint-disable-next-line no-undef
  window.socket = io("/");
  window.socket.emit(window.events.setNickname, {
    nickname: nickname
  });
};

var handleFormSubmit = function handleFormSubmit(e) {
  e.preventDefault();
  var input = loginForm.querySelector("input");
  var value = input.value;
  input.value = "";
  localStorage.setItem(NICKNAME, value);
  body.className = LOGGED_IN;
  logIn(value);
};

if (loginForm) {
  loginForm.addEventListener("submit", handleFormSubmit);
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxvZ2luLmpzIl0sIm5hbWVzIjpbImJvZHkiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJsb2dpbkZvcm0iLCJnZXRFbGVtZW50QnlJZCIsIk5JQ0tOQU1FIiwiTE9HR0VEX09VVCIsIkxPR0dFRF9JTiIsIm5pY2tOYW1lIiwibG9jYWxTdG9yYWdlIiwiZ2V0SXRlbSIsImNsYXNzTmFtZSIsImxvZ0luIiwibmlja25hbWUiLCJ3aW5kb3ciLCJzb2NrZXQiLCJpbyIsImVtaXQiLCJldmVudHMiLCJzZXROaWNrbmFtZSIsImhhbmRsZUZvcm1TdWJtaXQiLCJlIiwicHJldmVudERlZmF1bHQiLCJpbnB1dCIsInZhbHVlIiwic2V0SXRlbSIsImFkZEV2ZW50TGlzdGVuZXIiXSwibWFwcGluZ3MiOiI7O0FBQUEsSUFBTUEsSUFBSSxHQUFHQyxRQUFRLENBQUNDLGFBQVQsQ0FBdUIsTUFBdkIsQ0FBYjtBQUNBLElBQU1DLFNBQVMsR0FBR0YsUUFBUSxDQUFDRyxjQUFULENBQXdCLFNBQXhCLENBQWxCO0FBRUEsSUFBTUMsUUFBUSxHQUFHLFVBQWpCO0FBQ0EsSUFBTUMsVUFBVSxHQUFHLFdBQW5CO0FBQ0EsSUFBTUMsU0FBUyxHQUFHLFVBQWxCO0FBRUEsSUFBTUMsUUFBUSxHQUFHQyxZQUFZLENBQUNDLE9BQWIsQ0FBcUJMLFFBQXJCLENBQWpCOztBQUVBLElBQUlHLFFBQVEsS0FBSyxJQUFqQixFQUF1QjtBQUNyQlIsRUFBQUEsSUFBSSxDQUFDVyxTQUFMLEdBQWlCTCxVQUFqQjtBQUNELENBRkQsTUFFTztBQUNMTixFQUFBQSxJQUFJLENBQUNXLFNBQUwsR0FBaUJKLFNBQWpCO0FBQ0FLLEVBQUFBLEtBQUssQ0FBQ0osUUFBRCxDQUFMO0FBQ0Q7O0FBRUQsSUFBTUksS0FBSyxHQUFHLFNBQVJBLEtBQVEsQ0FBQ0MsUUFBRCxFQUFjO0FBQzFCO0FBQ0FDLEVBQUFBLE1BQU0sQ0FBQ0MsTUFBUCxHQUFnQkMsRUFBRSxDQUFDLEdBQUQsQ0FBbEI7QUFDQUYsRUFBQUEsTUFBTSxDQUFDQyxNQUFQLENBQWNFLElBQWQsQ0FBbUJILE1BQU0sQ0FBQ0ksTUFBUCxDQUFjQyxXQUFqQyxFQUE4QztBQUFFTixJQUFBQSxRQUFRLEVBQVJBO0FBQUYsR0FBOUM7QUFDRCxDQUpEOztBQU1BLElBQU1PLGdCQUFnQixHQUFHLFNBQW5CQSxnQkFBbUIsQ0FBQ0MsQ0FBRCxFQUFPO0FBQzlCQSxFQUFBQSxDQUFDLENBQUNDLGNBQUY7QUFDQSxNQUFNQyxLQUFLLEdBQUdwQixTQUFTLENBQUNELGFBQVYsQ0FBd0IsT0FBeEIsQ0FBZDtBQUY4QixNQUd0QnNCLEtBSHNCLEdBR1pELEtBSFksQ0FHdEJDLEtBSHNCO0FBSTlCRCxFQUFBQSxLQUFLLENBQUNDLEtBQU4sR0FBYyxFQUFkO0FBQ0FmLEVBQUFBLFlBQVksQ0FBQ2dCLE9BQWIsQ0FBcUJwQixRQUFyQixFQUErQm1CLEtBQS9CO0FBQ0F4QixFQUFBQSxJQUFJLENBQUNXLFNBQUwsR0FBaUJKLFNBQWpCO0FBQ0FLLEVBQUFBLEtBQUssQ0FBQ1ksS0FBRCxDQUFMO0FBQ0QsQ0FSRDs7QUFVQSxJQUFJckIsU0FBSixFQUFlO0FBQ2JBLEVBQUFBLFNBQVMsQ0FBQ3VCLGdCQUFWLENBQTJCLFFBQTNCLEVBQXFDTixnQkFBckM7QUFDRCIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IGJvZHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiYm9keVwiKTtcbmNvbnN0IGxvZ2luRm9ybSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwianNMb2dpblwiKTtcblxuY29uc3QgTklDS05BTUUgPSBcIm5pY2tuYW1lXCI7XG5jb25zdCBMT0dHRURfT1VUID0gXCJsb2dnZWRPdXRcIjtcbmNvbnN0IExPR0dFRF9JTiA9IFwibG9nZ2VkSW5cIjtcblxuY29uc3Qgbmlja05hbWUgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShOSUNLTkFNRSk7XG5cbmlmIChuaWNrTmFtZSA9PT0gbnVsbCkge1xuICBib2R5LmNsYXNzTmFtZSA9IExPR0dFRF9PVVQ7XG59IGVsc2Uge1xuICBib2R5LmNsYXNzTmFtZSA9IExPR0dFRF9JTjtcbiAgbG9nSW4obmlja05hbWUpO1xufVxuXG5jb25zdCBsb2dJbiA9IChuaWNrbmFtZSkgPT4ge1xuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW5kZWZcbiAgd2luZG93LnNvY2tldCA9IGlvKFwiL1wiKTtcbiAgd2luZG93LnNvY2tldC5lbWl0KHdpbmRvdy5ldmVudHMuc2V0Tmlja25hbWUsIHsgbmlja25hbWUgfSk7XG59O1xuXG5jb25zdCBoYW5kbGVGb3JtU3VibWl0ID0gKGUpID0+IHtcbiAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICBjb25zdCBpbnB1dCA9IGxvZ2luRm9ybS5xdWVyeVNlbGVjdG9yKFwiaW5wdXRcIik7XG4gIGNvbnN0IHsgdmFsdWUgfSA9IGlucHV0O1xuICBpbnB1dC52YWx1ZSA9IFwiXCI7XG4gIGxvY2FsU3RvcmFnZS5zZXRJdGVtKE5JQ0tOQU1FLCB2YWx1ZSk7XG4gIGJvZHkuY2xhc3NOYW1lID0gTE9HR0VEX0lOO1xuICBsb2dJbih2YWx1ZSk7XG59O1xuXG5pZiAobG9naW5Gb3JtKSB7XG4gIGxvZ2luRm9ybS5hZGRFdmVudExpc3RlbmVyKFwic3VibWl0XCIsIGhhbmRsZUZvcm1TdWJtaXQpO1xufVxuIl19
},{}]},{},[1])