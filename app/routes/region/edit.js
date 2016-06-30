import Ember from 'ember';

export default Ember.Route.extend({
	model: function(params) {
      	let model = {}
      	model.region = this.store.findRecord('region', params.fileName);
      	model.excursion = this.store.findAll('excursion-list');
    	model.topic = this.store.findAll('topic-list');
      	return model
  	}
});

