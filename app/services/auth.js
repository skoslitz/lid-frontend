import Ember from 'ember';

let { $ } = Ember;

export default Ember.Service.extend({
	checkWebadmin() {
		let url = 'http://localhost:1313/api/checkauth/webadmin'
		let check;
		$.ajax({
	        type: 'GET',
	        url: url
      	}).done(function(data) {
	    	console.log("promise ", data)
	    	check = data;
	    	return check;
	  	});
      	
	  	
	},
	checkEditor() {
		let url = 'http://localhost:1313/api/checkauth/editor'
		let check = false
		$.ajax({
	        type: 'GET',
	        url: url
      	}).done(function(data) {
	    	check = data;
	  	});

	  	return check;
	}
});
