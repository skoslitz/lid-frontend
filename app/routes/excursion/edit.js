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
    // editor dock actions
    	updatePage() {
    		console.log('updateExcursion action');
    	},
    	deletePage(model) {
    		console.log('deleteExcursion action');
    	}   	
	}
});
