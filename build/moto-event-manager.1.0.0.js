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

	"use strict";
	
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
	
	function displayAllEvents(data) {
	    for (index in data.events) {
	        $('body').append("<p> " + data.events[index].text + " </p>");
	    }
	}
	
	function getAndDisplayAllEvents() {
	    getAllEvents(displayAllEvents);
	}
	
	$(function () {
	    getAndDisplayAllEvents();
	});

/***/ }
/******/ ]);
//# sourceMappingURL=moto-event-manager.1.0.0.js.map