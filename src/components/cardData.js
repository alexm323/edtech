const capitals = {
        'Alabama': 'Montgomery',
        'Alaska': 'Juneau',
        'Arizona':'Phoenix',
        'Arkansas':'Little Rock',
        'California': 'Sacramento',
        'Colorado':'Denver',
        'Connecticut':'Hartford',
        'Delaware':'Dover',
        'Florida': 'Tallahassee',
        'Georgia': 'Atlanta',
        'Hawaii': 'Honolulu',
        'Idaho': 'Boise',
        'Illinois': 'Springfield',
        'Indiana': 'Indianapolis',
        'Iowa': 'Des Monies',
        'Kansas': 'Topeka',
        'Kentucky': 'Frankfort',
        'Louisiana': 'Baton Rouge',
        'Maine': 'Augusta',
        'Maryland': 'Annapolis',
        'Massachusetts': 'Boston',
        'Michigan': 'Lansing',
        'Minnesota': 'St. Paul',
        'Mississippi': 'Jackson',
        'Missouri': 'Jefferson City',
        'Montana': 'Helena',
        'Nebraska': 'Lincoln',
        'Nevada': 'Carson City',
        'New Hampshire': 'Concord',
        'New Jersey': 'Trenton',
        'New Mexico': 'Santa Fe',
        'New York': 'Albany',
        'North Carolina': 'Raleigh',
        'North Dakota': 'Bismarck',
        'Ohio': 'Columbus',
        'Oklahoma': 'Oklahoma City',
        'Oregon': 'Salem',
        'Pennsylvania': 'Harrisburg',
        'Rhode Island': 'Providence',
        'South Carolina': 'Columbia',
        'South Dakota': 'Pierre',
        'Tennessee': 'Nashville',
        'Texas': 'Austin',
        'Utah': 'Salt Lake City',
        'Vermont': 'Montpelier',
        'Virginia': 'Richmond',
        'Washington': 'Olympia',
        'West Virginia': 'Charleston',
        'Wisconsin': 'Madison',
        'Wyoming': 'Cheyenne'  
    }
 

    let cardData = Object.entries(capitals).reduce((acc,c,i) => {
        let [state, capital] = c;
        let slug = state.toLowerCase().split(' ').join('-');

        let id = i + 1;
        acc[i] = {};
        acc[i]['id'] = id;
        acc[i]['state'] = state;
        acc[i]['capital'] = capital;
        acc[i]['url'] = `https://cdn.civil.services/us-states/flags/${slug}-large.png`;
        return acc;        
    }, []);


    console.log(cardData)

    // single and double named state
    // https://cdn.civil.services/us-states/flags/alabama-large.png
    // https://cdn.civil.services/us-states/flags/west-virginia-large.png

    // `https://cdn.civil.services/us-states/flags/${slug}`
    // `https://cdn.civil.services/us-states/flags/${new-york}-large.png`

export default cardData;

