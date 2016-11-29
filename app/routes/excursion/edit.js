import Ember from 'ember';

export default Ember.Route.extend({
	model: function(params) {
    	return this.store.findRecord('excursion', params.id);
  	},
	actions: {
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
    }    
});
