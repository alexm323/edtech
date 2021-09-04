const states = [
      {
        "id": 1,
        "state": "Alabama",
        "capital": "Montgomery",
        "url": "https://cdn.civil.services/us-states/flags/alabama-large.png"
      },
      {
        "id": 2,
        "state": "Alaska",
        "capital": "Juneau",
        "url": "https://cdn.civil.services/us-states/flags/alaska-large.png"
      },
      {
        "id": 3,
        "state": "Arizona",
        "capital": "Phoenix",
        "url": "https://cdn.civil.services/us-states/flags/arizona-large.png"
      },
      {
        "id": 4,
        "state": "Arkansas",
        "capital": "Little Rock",
        "url": "https://cdn.civil.services/us-states/flags/arkansas-large.png"
      },
      {
        "id": 5,
        "state": "California",
        "capital": "Sacramento",
        "url": "https://cdn.civil.services/us-states/flags/california-large.png"
      },
      {
        "id": 6,
        "state": "Colorado",
        "capital": "Denver",
        "url": "https://cdn.civil.services/us-states/flags/colorado-large.png"
      },
      {
        "id": 7,
        "state": "Connecticut",
        "capital": "Hartford",
        "url": "https://cdn.civil.services/us-states/flags/connecticut-large.png"
      },
      {
        "id": 8,
        "state": "Delaware",
        "capital": "Dover",
        "url": "https://cdn.civil.services/us-states/flags/delaware-large.png"
      },
      {
        "id": 9,
        "state": "Florida",
        "capital": "Tallahassee",
        "url": "https://cdn.civil.services/us-states/flags/florida-large.png"
      },
      {
        "id": 10,
        "state": "Georgia",
        "capital": "Atlanta",
        "url": "https://cdn.civil.services/us-states/flags/georgia-large.png"
      },
      {
        "id": 11,
        "state": "Hawaii",
        "capital": "Honolulu",
        "url": "https://cdn.civil.services/us-states/flags/hawaii-large.png"
      },
      {
        "id": 12,
        "state": "Idaho",
        "capital": "Boise",
        "url": "https://cdn.civil.services/us-states/flags/idaho-large.png"
      },
      {
        "id": 13,
        "state": "Illinois",
        "capital": "Springfield",
        "url": "https://cdn.civil.services/us-states/flags/illinois-large.png"
      },
      {
        "id": 14,
        "state": "Indiana",
        "capital": "Indianapolis",
        "url": "https://cdn.civil.services/us-states/flags/indiana-large.png"
      },
      {
        "id": 15,
        "state": "Iowa",
        "capital": "Des Monies",
        "url": "https://cdn.civil.services/us-states/flags/iowa-large.png"
      },
      {
        "id": 16,
        "state": "Kansas",
        "capital": "Topeka",
        "url": "https://cdn.civil.services/us-states/flags/kansas-large.png"
      },
      {
        "id": 17,
        "state": "Kentucky",
        "capital": "Frankfort",
        "url": "https://cdn.civil.services/us-states/flags/kentucky-large.png"
      },
      {
        "id": 18,
        "state": "Louisiana",
        "capital": "Baton Rouge",
        "url": "https://cdn.civil.services/us-states/flags/louisiana-large.png"
      },
      {
        "id": 19,
        "state": "Maine",
        "capital": "Augusta",
        "url": "https://cdn.civil.services/us-states/flags/maine-large.png"
      },
      {
        "id": 20,
        "state": "Maryland",
        "capital": "Annapolis",
        "url": "https://cdn.civil.services/us-states/flags/maryland-large.png"
      },
      {
        "id": 21,
        "state": "Massachusetts",
        "capital": "Boston",
        "url": "https://cdn.civil.services/us-states/flags/massachusetts-large.png"
      },
      {
        "id": 22,
        "state": "Michigan",
        "capital": "Lansing",
        "url": "https://cdn.civil.services/us-states/flags/michigan-large.png"
      },
      {
        "id": 23,
        "state": "Minnesota",
        "capital": "St. Paul",
        "url": "https://cdn.civil.services/us-states/flags/minnesota-large.png"
      },
      {
        "id": 24,
        "state": "Mississippi",
        "capital": "Jackson",
        "url": "https://cdn.civil.services/us-states/flags/mississippi-large.png"
      },
      {
        "id": 25,
        "state": "Missouri",
        "capital": "Jefferson City",
        "url": "https://cdn.civil.services/us-states/flags/missouri-large.png"
      },
      {
        "id": 26,
        "state": "Montana",
        "capital": "Helena",
        "url": "https://cdn.civil.services/us-states/flags/montana-large.png"
      },
      {
        "id": 27,
        "state": "Nebraska",
        "capital": "Lincoln",
        "url": "https://cdn.civil.services/us-states/flags/nebraska-large.png"
      },
      {
        "id": 28,
        "state": "Nevada",
        "capital": "Carson City",
        "url": "https://cdn.civil.services/us-states/flags/nevada-large.png"
      },
      {
        "id": 29,
        "state": "New Hampshire",
        "capital": "Concord",
        "url": "https://cdn.civil.services/us-states/flags/new-hampshire-large.png"
      },
      {
        "id": 30,
        "state": "New Jersey",
        "capital": "Trenton",
        "url": "https://cdn.civil.services/us-states/flags/new-jersey-large.png"
      },
      {
        "id": 31,
        "state": "New Mexico",
        "capital": "Santa Fe",
        "url": "https://cdn.civil.services/us-states/flags/new-mexico-large.png"
      },
      {
        "id": 32,
        "state": "New York",
        "capital": "Albany",
        "url": "https://cdn.civil.services/us-states/flags/new-york-large.png"
      },
      {
        "id": 33,
        "state": "North Carolina",
        "capital": "Raleigh",
        "url": "https://cdn.civil.services/us-states/flags/north-carolina-large.png"
      },
      {
        "id": 34,
        "state": "North Dakota",
        "capital": "Bismarck",
        "url": "https://cdn.civil.services/us-states/flags/north-dakota-large.png"
      },
      {
        "id": 35,
        "state": "Ohio",
        "capital": "Columbus",
        "url": "https://cdn.civil.services/us-states/flags/ohio-large.png"
      },
      {
        "id": 36,
        "state": "Oklahoma",
        "capital": "Oklahoma City",
        "url": "https://cdn.civil.services/us-states/flags/oklahoma-large.png"
      },
      {
        "id": 37,
        "state": "Oregon",
        "capital": "Salem",
        "url": "https://cdn.civil.services/us-states/flags/oregon-large.png"
      },
      {
        "id": 38,
        "state": "Pennsylvania",
        "capital": "Harrisburg",
        "url": "https://cdn.civil.services/us-states/flags/pennsylvania-large.png"
      },
      {
        "id": 39,
        "state": "Rhode Island",
        "capital": "Providence",
        "url": "https://cdn.civil.services/us-states/flags/rhode-island-large.png"
      },
      {
        "id": 40,
        "state": "South Carolina",
        "capital": "Columbia",
        "url": "https://cdn.civil.services/us-states/flags/south-carolina-large.png"
      },
      {
        "id": 41,
        "state": "South Dakota",
        "capital": "Pierre",
        "url": "https://cdn.civil.services/us-states/flags/south-dakota-large.png"
      },
      {
        "id": 42,
        "state": "Tennessee",
        "capital": "Nashville",
        "url": "https://cdn.civil.services/us-states/flags/tennessee-large.png"
      },
      {
        "id": 43,
        "state": "Texas",
        "capital": "Austin",
        "url": "https://cdn.civil.services/us-states/flags/texas-large.png"
      },
      {
        "id": 44,
        "state": "Utah",
        "capital": "Salt Lake City",
        "url": "https://cdn.civil.services/us-states/flags/utah-large.png"
      },
      {
        "id": 45,
        "state": "Vermont",
        "capital": "Montpelier",
        "url": "https://cdn.civil.services/us-states/flags/vermont-large.png"
      },
      {
        "id": 46,
        "state": "Virginia",
        "capital": "Richmond",
        "url": "https://cdn.civil.services/us-states/flags/virginia-large.png"
      },
      {
        "id": 47,
        "state": "Washington",
        "capital": "Olympia",
        "url": "https://cdn.civil.services/us-states/flags/washington-large.png"
      },
      {
        "id": 48,
        "state": "West Virginia",
        "capital": "Charleston",
        "url": "https://cdn.civil.services/us-states/flags/west-virginia-large.png"
      },
      {
        "id": 49,
        "state": "Wisconsin",
        "capital": "Madison",
        "url": "https://cdn.civil.services/us-states/flags/wisconsin-large.png"
      },
      {
        "id": 50,
        "state": "Wyoming",
        "capital": "Cheyenne",
        "url": "https://cdn.civil.services/us-states/flags/wyoming-large.png"
      }
    ]

  export default states
  