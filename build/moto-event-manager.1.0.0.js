/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports) {

	'use strict';
	
	var currentUser = '';
	// functions
	
	
	function createNewAccount(email, password) {
	   var form_data = {
	      email: email,
	      password: password
	   };
	   console.log(email);
	   console.log(password);
	
	   $.ajax({
	      url: '/register',
	      type: 'POST',
	      data: JSON.stringify(form_data),
	      contentType: 'application/json',
	      success: function success(data, textStatus, jqXHR) {
	         localStorage.setItem('form_data.email', email);
	         window.location.href = "profile.html";
	      },
	      error: function error(jqXHR, textStatus, errorThrown) {
	         console.log(jqXHR, textStatus, errorThrown);
	      }
	   });
	};
	
	function addRiderContextToAccount(moto, level, location) {
	   var email = localStorage.getItem('form_data.email');
	   var profile = {
	      email: email,
	      moto: moto,
	      level: level,
	      location: location
	   };
	   $.ajax({
	      url: '/profile/' + email,
	      type: 'PUT',
	      data: JSON.stringify(profile),
	      contentType: 'application/json',
	      success: function success(data, textStatus, jqXHR) {
	         window.location.href = "main.html";
	         console.log(email);
	         console.log(data);
	      },
	      error: function error(jqXHR, textStatus, errorThrown) {
	         console.log(errorThrown);
	      }
	   });
	};
	
	function loginToAccount() {
	   var email = $('#email-input-login').val();
	   var password = $('#password-input-login').val();
	   console.log(email);
	   console.log(password);
	};
	
	// Mock Events //
	
	var MOCK_EVENTS = {
	   "events": [{
	      "id": "001",
	      "title": "North Coast Ocean Ride",
	      "date": "Jan 14, 2017",
	      "level": "beginner",
	      "attendees": ["John Doe", "Jane Smith"]
	   }, {
	      "id": "002",
	      "title": "East Bay Hills All Day",
	      "date": "Jan 21, 2017",
	      "level": "intermediate",
	      "attendees": ["John Doe"]
	   }, {
	      "id": "003",
	      "title": "Sound Coast Loop – SF to SC",
	      "date": "Jan 30, 2017",
	      "level": "advanced",
	      "attendees": ["John Doe", "Jane Smith", "Jack Anderson"]
	   }, {
	      "id": "004",
	      "title": "Pacifica Surf and Breakfast",
	      "date": "Feb 7, 2017",
	      "level": "beginner",
	      "attendees": ["Jane Smith"]
	   }]
	};
	
	function getAllEvents(callback) {
	   setTimeout(function () {
	      return callback(MOCK_EVENTS);
	   }, 100);
	}
	
	function showAttendees(callback) {
	   setTimeout(function () {
	      return callback(MOCK_EVENTS);
	   }, 100);
	}
	
	function getmyEvents(callback) {
	   setTimeout(function () {
	      return callback(MOCK_EVENTS);
	   }, 100);
	}
	
	function displayEventAttendees(data) {
	   $('.event-title-0').append('' + data.events[0].title);
	   $('.event-date-0').append('' + data.events[0].date);
	   $('.event-level-0').append('' + data.events[0].level);
	   for (var i = 0; i < data.events[0].attendees.length; i++) {
	      var html = '<div class="panel panel-default col-sm-4 pl-0"><div class="panel-body">';
	      html += '<img class="img-responsive center-block" src="https://x1.xingassets.com/assets/frontend_minified/img/users/nobody_m.original.jpg" alt="profile-image" height="75" width="75"/>';
	      html += '<div class="panel-footer">' + data.events[0].attendees[i] + '</div></div>';
	      $('#attendees').append(html);
	   }
	}
	
	function displayAllEvents(data) {
	   for (var i = 0; i < data.events.length; i++) {
	      var html = '<div class="col-md-3"><div class="panel panel-default">';
	      html += '<div class="panel-body">';
	      html += '<img class="img-responsive center-block" src="https://static.pexels.com/photos/6548/cold-snow-winter-mountain.jpeg" alt="Mountain" height="150" width="190"></div>';
	      html += '<div class="panel-footer">' + data.events[i].title + '</div></div></div>';
	      $('#allEvents').append(html);
	   }
	}
	
	function displayMyEvents(data) {
	   for (var i = 0; i < data.events.length; i++) {
	      var html = '<div class="col-md-3"><div class="panel panel-default" id="' + data.events[i].id + '">';
	      html += '<div class="panel-body">';
	      html += '<img class="img-responsive center-block" src="https://static.pexels.com/photos/6548/cold-snow-winter-mountain.jpeg" alt="Mountain" height="150" width="190"></div>';
	      html += '<div class="panel-footer">' + data.events[i].title + '</div></div></div>';
	      $('#myEvents').append(html);
	   }
	}
	
	function goToEventDetails(id) {
	   $.ajax({
	      url: '/events/' + id,
	      type: 'GET',
	      contentType: 'application/json',
	      success: function success(data, textStatus, jqXHR) {
	         console.log(data);
	      },
	      error: function error(jqXHR, textStatus, errorThrown) {
	         console.log(errorThrown);
	      }
	   });
	}
	
	function getAndDisplayAllEvents() {
	   getAllEvents(displayAllEvents);
	   getmyEvents(displayMyEvents);
	   showAttendees(displayEventAttendees);
	}
	
	// Event Handlers //
	
	$(function () {
	   getAndDisplayAllEvents();
	
	   $('.register').on("click", function (e) {
	      e.preventDefault();
	      location.href = "register.html";
	   });
	
	   $('.btn-create-account').on("click", function (e) {
	      e.preventDefault();
	      var email = $('#email-input').val();
	      var password = $('#password-input').val();
	      createNewAccount(email, password);
	   });
	
	   $('#onboarding-form').submit(function (e) {
	      e.preventDefault();
	      var moto = $('#motorcycle-type').val();
	      var level = $('#level-rider').val();
	      var location = $('#location-rider').val();
	      console.log(moto);
	      console.log(level);
	      console.log(location);
	      addRiderContextToAccount(moto, level, location);
	   });
	
	   $('.login').on("click", function (e) {
	      e.preventDefault();
	      location.href = "login.html";
	   });
	
	   $('.btn-login').on("click", function (e) {
	      e.preventDefault();
	      loginToAccount();
	   });
	
	   $(document).on("click", ".panel", function (e) {
	      e.preventDefault();
	      var id = $(this).attr("id");
	      goToEventDetails(id);
	   });
	});

/***/ }
/******/ ]);
//# sourceMappingURL=moto-event-manager.1.0.0.js.map