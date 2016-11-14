import { Meteor } from 'meteor/meteor';
import { Template } from 'meteor/templating';

import './main.html';

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

	        for(i = 0; i < arr.length; i++) {
				if (arr[i].distance <= distance) {
					if( !(arr[i].closed.indexOf(month) > -1)) {
						if( (arr[i].water == true && water == "Yes") || (arr[i].water == false && water == "No")) {
							if( (arr[i].plumbing == true && bathroom == "Yes") || (arr[i].plumbing == false && bathroom == "No")) {
								if( (arr[i].cooking == true && cook == "Yes") || (arr[i].cooking == false && cook == "No")) {
									return arr[i];
								}
							}
						}
					}
				}
			}
    	},
    	// 'result': function () {

    	// }
    });
}
