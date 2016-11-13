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
  	label: 'Link to reserve campsite if required.'
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