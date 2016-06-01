import Ember from 'ember';

export default Ember.Route.extend({
	actions: {
		push: function() {
			console.log("button action!")
		}
	},
	model(params) {
    	return this.store.findRecord('excursion', '78_E_503-gruenau.md'); 
  	}
});
