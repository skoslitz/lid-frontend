import Ember from 'ember';

export default Ember.Route.extend({
	model: function(params) {
    	return this.store.findRecord('topic', params.id); 
  	},
	actions: {
		push: function() {
			console.log("button action!")
		},
		//site nav actions
		regionList() {
      		this.transitionTo('/');
    	},
    	refreshRoute() {
	      let self = this;
	      Ember.run.later((function() {
	        self.refresh();
	      }), 1000);
	    }
	},	
});