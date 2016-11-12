import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';

import './main.html';

Template.submit.events({
	'submit form': function(){
		SearchDB
	}
});
