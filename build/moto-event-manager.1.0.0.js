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
	// Credentials //
	// app.post('/', jsonParser, function(req, res) {
	//     if (!req.body) {
	//         return res.status(400).json({
	//             message: "No request body"
	//         });
	//     }
	//
	//     if (!('username' in req.body)) {
	//         return res.status(422).json({
	//             message: 'Missing field: username'
	//         });
	//     }
	//
	//     var username = req.body.username;
	//
	//     if (typeof username !== 'string') {
	//         return res.status(422).json({
	//             message: 'Incorrect field type: username'
	//         });
	//     }
	//
	//     username = username.trim();
	//
	//     if (username === '') {
	//         return res.status(422).json({
	//             message: 'Incorrect field length: username'
	//         });
	//     }
	//
	//     if (!('password' in req.body)) {
	//         return res.status(422).json({
	//             message: 'Missing field: password'
	//         });
	//     }
	//
	//     var password = req.body.password;
	//
	//     if (typeof password !== 'string') {
	//         return res.status(422).json({
	//             message: 'Incorrect field type: password'
	//         });
	//     }
	//
	//     password = password.trim();
	//
	//     if (password === '') {
	//         return res.status(422).json({
	//             message: 'Incorrect field length: password'
	//         });
	//     }
	//
	//     var user = new User({
	//         username: username,
	//         password: password
	//     });
	//
	//     user.save(function(err) {
	//         if (err) {
	//             return res.status(500).json({
	//                 message: 'Internal server error'
	//             });
	//         }
	//
	//         return res.status(201).json({});
	//     });
	// });
	//
	// mongoose.connect('mongodb://localhost/auth').then(function() {
	//     app.listen(process.env.PORT || 8080);
	// });
	
	
	// Event Handlers //
	
	$(function () {
	    getAndDisplayAllEvents();
	
	    $('.btn-create-account').on("click", function (e) {
	        e.preventDefault();
	        createNewAccount();
	    });
	});
	
	function createNewAccount() {
	    var email = $('#email-input').val();
	    var password = $('#password-input').val();
	    console.log(email);
	    console.log(password);
	    if (email === '') {
	        alert('Please enter a valid email address.');
	    } else if (password === '') {
	        alert('Please enter a valid password.');
	    }
	}
	
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
	    for (var index in data.events) {
	        $('body').append('<p> ' + data.events[index].title + ' </p>');
	    }
	}
	
	function getAndDisplayAllEvents() {
	    getAllEvents(displayAllEvents);
	}

/***/ }
/******/ ]);
//# sourceMappingURL=moto-event-manager.1.0.0.js.map