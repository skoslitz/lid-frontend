import Ember from 'ember';
let { $ } = Ember;


export default Ember.Component.extend({
	deletePage: false,
	actions: {
		publishSite() {
			// TODO: check model.hasDirtyAttributes before upload
			console.log("Send cmd hugo with publish params");			
	      	let url = "http://localhost:1313/api/site/publish";
			return $.ajax({
				type: 'POST',
				url: url
			});
	    },
	    previewSite() {
	      	console.log("Send cmd hugo with preview params");			
	      	let url = "http://localhost:1313/api/site/preview";
			return $.ajax({
				type: 'POST',
				url: url
			});
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
