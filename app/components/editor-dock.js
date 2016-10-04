import Ember from 'ember';

export default Ember.Component.extend({
	deletePage: false,
	actions: {
		publishSite() {
			console.log("send publishSite Action to bubble up ...")
			this.sendAction('publishSiteAction');
	    },
	    previewSite() {
	      	console.log("send previewSite Action to bubble up ...")
			this.sendAction('previewSiteAction');
	    },
	    openHelper() {

	    },
	    deleteRegion(model) {
	    	this.sendAction('deleteRegionAction', model);		
	    },
	    updateRegion(model) {
	    	this.sendAction('updateRegionAction', model);		
	    },
	    deleteTopic(model) {
	    	this.sendAction('deleteTopicAction', model);		
	    },
	    updateTopic(model) {
	    	this.sendAction('updateTopicAction', model);		
	    },	
	    deleteExcursion(model) {
	    	this.sendAction('deleteExcursionAction', model);		
	    },
	    updateExcursion(model) {
	    	this.sendAction('updateExcursionAction', model);		
	    }	
	}
});
