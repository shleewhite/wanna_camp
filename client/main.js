import { Meteor } from 'meteor/meteor';
import { Template } from 'meteor/templating';

import './main.html';
// import '../server/main.js'

Meteor.subscribe("CampSites");

if (Meteor.isClient) {
    Template.submit.events({
		'submit #subButton': function( event ){
        	event.preventDefault();
	        var month =	document.getElementById("months").value;
	        var distance = document.getElementById("distance").value;
	        var water = document.getElementById("water").value;
	        var bathroom = document.getElementById("bathroom").value;
	        var cook = document.getElementById("cook").value;
	        var arr = CampSites.find().fetch();

	        for(int i = 0; i < arr.length; i++) {
	        	if (arr[i].distance <= distance) {
	        		
	        }
	        console.log(arr[0].distance);
    	}
    });
}
