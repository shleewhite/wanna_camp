import { Meteor } from 'meteor/meteor';
import { Template } from 'meteor/templating';

import './main.html';
import '../server/main.js'

Meteor.subscribe("places");

if (Meteor.isClient) {
    Template.submit.events({
		'submit #subButton': function( event ){
        	event.preventDefault();
	        var month =	document.getElementById("months").value;
	        var fDistance = document.getElementById("distance").value;
	        var water = document.getElementById("water").value;
	        var bathroom = document.getElementById("bathroom").value;
	        var cook = document.getElementById("cook").value;
	        console.log(month, distance, water, bathroom, cook);
	        console.log(CampSites.find({ distance: { $lte: fDistance} } ));
    	}
    });
}
