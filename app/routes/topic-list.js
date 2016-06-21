import Ember from 'ember';

export default Ember.Route.extend({
	model(params) {
    	//return this.store.findAll('topic-list'); 
    	return this.store.findRecord('topic-list', params.id); 
  	}
});
