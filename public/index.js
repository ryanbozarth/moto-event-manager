var MOCK_EVENTS = {
    "events": [
        {
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

function displayAllEvents(data) {
	for (index in data.events) {
		$('body').append(
			`<p> ${data.events[index].text} </p>`)
	}
}

function getAndDisplayAllEvents() {
	getAllEvents(displayAllEvents);
}

$(function() {
	getAndDisplayAllEvents();
});
