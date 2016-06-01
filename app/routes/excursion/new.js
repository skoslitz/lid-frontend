import Ember from 'ember';

export default Ember.Route.extend({
	actions: {
		push: function() {
			console.log("button action!")
		}
	},
	model() {
    	return ""
  	}
});
