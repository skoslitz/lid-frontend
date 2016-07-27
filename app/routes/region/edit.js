import Ember from 'ember';

export default Ember.Route.extend({
	model: function(params) {
      	let model = {}
      	model.region = this.store.findRecord('region', params.id);
      	model.excursion = this.store.query('excursion-list', {
    		id: params.id
    	});
    	model.topic = this.store.query('topic-list', {
    		id: params.id
    	});
      	return model
  	}
});

