CampSites = new Mongo.Collection( 'places' );

let PlacesSchema = new SimpleSchema({
  'name': {
    type: String,
    label: 'The name of the campsite.'
  },
  'distance': {
    type: Number,
    label: 'The distance of the campsite from UCSC campus.'
  },
  'closed': {
  	type: [String],
  	label: 'List of the months the campsite is closed, if applicable.'
  },
  'water': {
    type: Boolean,
    label: 'Whether or not the campsite has drinking water.'
  },
  'plumbing': {
    type: Boolean,
    label: 'Whether or not the campsite has any form of bathroom.'
  },
  'cooking': {
    type: Boolean,
    label: 'Whether or not the campsite has a fire pit or grill to cook.'
  },
  'reservation': {
  	type: String,
  	label: 'Link to reserve campsite if necessary.'
  },
  'nearby': {
  	type: [String],
  	label: 'List of things to do near the campsite.'
  },
  'pet': {
  	type: Boolean,
  	label: 'Whether or not pets are allowed at the camsite.'
  }
});

CampSites.attachSchema( PlacesSchema );

CampSites.insert({name: "Henry Cowell Campground", distance: 10, closed: ["November", "December", "January", "February"], water: true, plumbing: true, cooking: true, reservation: "http://www.reserveamerica.com/camping/henry-cowell-redwoods-sp/r/facilityDetails.do?contractCode=CA&parkId=120041", nearby: ["Redwoods", "30 miles of trails", "fishing"], pet: true});
CampSites.insert({name: "Bob's Pine Grove", distance: 4, closed: [], water: true, plumbing: true, cooking: false, reservation: "null", nearby: ["Along Big Trees Railroad Tracks", "Borders base of Pogonip"], pet: true});
CampSites.insert({name: "Big Basin Redwoods State Park", distance: 30, closed: [], water: true, plumbing: true, cooking: true, reservation: "http://www.reserveamerica.com/camping/big-basin-redwoods-sp/r/campgroundDetails.do?contractCode=CA&parkId=120009", nearby: ["Swimming", "Surfing", "Bike Trails"], pet: false});
CampSites.insert({name: "Sunset State Beach", distance: 20, closed: [], water: true, plumbing: true, cooking: false, reservation: "http://www.reserveamerica.com/camping/sunset-sb/r/campgroundDetails.do?contractCode=CA&parkId=120094", nearby: ["Swimming", "Surfing"], pet: false});
CampSites.insert({name: "Laguna Seca Recreation Area", distance: 53, closed: [], water: true, plumbing: true, cooking: true, reservation: "null", nearby: ["Views of Salinas Valley", "Hiking Trails"], pet: false});
CampSites.insert({name: "Pfieffer Big Sur State Park", distance: 75, closed: [], water: true, plumbing: false, cooking: true, reservation: "http://www.reserveamerica.com/camping/pfeiffer-big-sur-sp/r/campgroundDetails.do?contractCode=CA&parkId=120068", nearby: ["Forested", "Big Sur River"], pet: false});
CampSites.insert({name: "Uvas Canyon County Park", distance: 47, closed: [], water: true, plumbing: true, cooking: true, reservation: "https://gooutsideandplay.org/", nearby: ["Waterfall Hike", "Picnic Spots"], pet: true});
