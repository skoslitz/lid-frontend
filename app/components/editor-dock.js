import Ember from 'ember';

export default Ember.Component.extend({
	deletePage: false,
	actions: {
		publishSite(model) {
			// TODO: check model.hasDirtyAttributes before upload
			var store = this.get('model.store');
			console.log(store);
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
	    	// TODO: set model.hasDirtyAttributes = false
	    	this.sendAction('updateRegionAction', model);
	    },
	    deleteTopic(model) {
	    	this.sendAction('deleteTopicAction', model);
	    },
	    updateTopic(model) {
	    	// TODO: set model.hasDirtyAttributes = false
	    	this.sendAction('updateTopicAction', model);
	    },
	    deleteExcursion(model) {
	    	this.sendAction('deleteExcursionAction', model);
	    },
	    updateExcursion(model) {
	    	// TODO: set model.hasDirtyAttributes = false
	    	this.sendAction('updateExcursionAction', model);
	    }
	}
});
