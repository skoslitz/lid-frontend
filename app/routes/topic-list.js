import Ember from 'ember';

export default Ember.Route.extend({
	actions: {
		regionList() {
      		this.transitionTo('/');
    	},
	},
	model(params) {
    	return this.store.query('topic-list', {
    		id: params.id
    	});     	
  	}
});
