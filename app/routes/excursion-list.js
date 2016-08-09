import Ember from 'ember';

export default Ember.Route.extend({
	actions: {
		regionList() {
      		this.transitionTo('/');
    	},
	},
	model(params) {
    	return this.store.query('excursion-list', {
    		id: params.id
    	});     	
  	}
});
