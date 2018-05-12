import Ember from 'ember';

export default Ember.Route.extend({
	actions: {
		push: function() {
			console.log("button action!");
		}
	},
	model(params) {

    	let d = new Date();
    	let today = `${ d.getFullYear() }-${ d.getMonth() + 1 }-${ d.getDate() }`;

    	return this.store.createRecord('topic', {
    		bandId: params.id,
    		date: today
    	});
  	}
});