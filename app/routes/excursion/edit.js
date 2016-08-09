import Ember from 'ember';

export default Ember.Route.extend({
	actions: {
		regionList() {
      		this.transitionTo('/');
    	},
	},
	model: function(params) {
    	return this.store.findRecord('excursion', params.id);
  	}
});
