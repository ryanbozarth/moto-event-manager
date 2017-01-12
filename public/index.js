'use strict';

// Event Handlers //

$(function() {
  getAndDisplayAllEvents();

  $('.register').on("click", function(e) {
    e.preventDefault();
    location.href = "register.html";
  });

  $('.btn-create-account').on("click", function(e) {
    e.preventDefault();
    createNewAccount();
  });

  $('#onboarding-form').submit(function(e) {
    e.preventDefault();
    addRiderContextToAccount();
  });

  $('.login').on("click", function(e) {
    e.preventDefault();
    location.href = "login.html";
  });

  $('.btn-login').on("click", function(e) {
    e.preventDefault();
    loginToAccount()
  });

  $('.panel').on("click", function(e) {
    e.preventDefault();
    goToEventDetails();
  });
});

// functions

function createNewAccount() {
  var email = $('#email-input').val();
  var password = $('#password-input').val();
  var form_data = {
    username: email,
    password: password
  };
  console.log(email);
  console.log(password);

  $.ajax({
    url: 'http://localhost:8080/register',
    type: 'POST',
    data: form_data,
    success: function(data, textStatus, jqXHR) {
      location.href = "intro.html";
    },
    error: function(jqXHR, textStatus, errorThrown) {
      console.log(errorThrown);
    }
  });
};

function loginToAccount() {
  let email = $('#email-input-login').val();
  let password = $('#password-input-login').val();
  console.log(email);
  console.log(password);
};

function addRiderContextToAccount() {
  var moto = $('#motorcycle-type').val();
  var level = $('#level-rider').val();
  var location = $('#location-rider').val();
  console.log(moto);
  console.log(level);
  console.log(location);
};


// Mock Events //

const MOCK_EVENTS = {
  "events": [{
      "id": "001",
      "title": "North Coast Ocean Ride",
      "date": "Jan 14, 2017",
      "level": "beginner",
      "attendees": ["John Doe", "Jane Smith"]
    },
    {
      "id": "002",
      "title": "East Bay Hills All Day",
      "date": "Jan 21, 2017",
      "level": "intermediate",
      "attendees": ["John Doe"]
    },
    {
      "id": "003",
      "title": "Sound Coast Loop – SF to SC",
      "date": "Jan 30, 2017",
      "level": "advanced",
      "attendees": ["John Doe", "Jane Smith", "Jack Anderson"]
    },
    {
      "title": "Pacifica Surf and Breakfast",
      "date": "Feb 7, 2017",
      "level": "beginner",
      "attendees": ["Jane Smith"]
    }
  ]
};

function getAllEvents(callback) {
  setTimeout(() => callback(MOCK_EVENTS), 100);
}

function showAttendees(callback) {
  setTimeout(() => callback(MOCK_EVENTS), 100);
}

function getmyEvents(callback) {
  setTimeout(() => callback(MOCK_EVENTS), 100);
}

function displayEventAttendees(data) {
  $('.event-title-0').append(`${data.events[0].title}`);
  $('.event-date-0').append(`${data.events[0].date}`);
  $('.event-level-0').append(`${data.events[0].level}`);
  for (let i = 0; i < data.events[0].attendees.length; i++) {
    var html = '<div class="panel panel-default col-sm-4 pl-0"><div class="panel-body">';
    html += '<img class="img-responsive center-block" src="https://x1.xingassets.com/assets/frontend_minified/img/users/nobody_m.original.jpg" alt="profile-image" height="75" width="75"/>'
    html += '<div class="panel-footer">' + data.events[0].attendees[i] + '</div></div>'
    $('#attendees').append(html);
  }
}

function displayAllEvents(data) {
  for (let i = 0; i < data.events.length; i++) {
    var html = '<div class="col-md-3"><div class="panel panel-default">'
    html += '<div class="panel-body">'
    html += '<img class="img-responsive center-block" src="https://static.pexels.com/photos/6548/cold-snow-winter-mountain.jpeg" alt="Mountain" height="150" width="190"></div>'
    html += '<div class="panel-footer">' + data.events[i].title + '</div></div></div>'
    $('#allEvents').append(html);
  }
}

function displayMyEvents(data) {
  for (let i = 0; i < data.events.length; i++) {
    var html = '<div class="col-md-3"><div class="panel panel-default" id="' + data.events[i].id + '">'
    html += '<div class="panel-body">'
    html += '<img class="img-responsive center-block" src="https://static.pexels.com/photos/6548/cold-snow-winter-mountain.jpeg" alt="Mountain" height="150" width="190"></div>'
    html += '<div class="panel-footer">' + data.events[i].title + '</div></div></div>'
    $('#myEvents').append(html);
  }
}


function getAndDisplayAllEvents() {
  getAllEvents(displayAllEvents);
  getmyEvents(displayMyEvents)
  showAttendees(displayEventAttendees);
}
