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
	        var results = document.getElementById("results");
	        var num = 0;

	        document.getElementById("subButton").style.display = "none";

	        for(i = 0; i < arr.length; i++) {
				if (arr[i].distance <= distance) {
					if( !(arr[i].closed.indexOf(month) > -1)) {
						if( (arr[i].water == true && water == "Yes") || (arr[i].water == false && water == "No")) {
							if( (arr[i].plumbing == true && bathroom == "Yes") || (arr[i].plumbing == false && bathroom == "No")) {
								if( (arr[i].cooking == true && cook == "Yes") || (arr[i].cooking == false && cook == "No")) {
									num += 1;
									results.innerHTML += resHTML(num, arr[i].name, arr[i].pet, arr[i].water, arr[i].plumbing, arr[i].distance, arr[i].nearby, arr[i].reservation, arr[i].cooking);
								}
							}
						}
					}
				}
			}
			document.getElementById("refreshButton").style.display = "block";

			function resHTML (num, name, pet, water, bathroom, distance, nearby, reservation, fire) {
				var result;
				result = "<div id='result" + num + "'><p>"+ name + "</p>"
						  + "<div id='lists'><ul id='list1'><li>Pets Allowed: " + pet + "</li>"
						  + "<li>Fires Allowed: " + fire + "</li>"
						  + "<li>Water on Site: " + water + "</li>"
						  + "<li>Bathrooms on Site: " + bathroom + "</li>"
						  + "<li>Distance from UCSC Campus: " + distance + " miles</li></ul>"
						  + "</div></div>";
				return result;
			}
    	}
    });
}
