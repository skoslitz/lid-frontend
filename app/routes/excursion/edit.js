import Ember from 'ember';

export default Ember.Route.extend({
	actions: {
		push: function() {
			console.log("button action!")
		}
	},
	model: function(params) {
    	return this.store.findRecord('excursion', params.name); 
  	}
});
