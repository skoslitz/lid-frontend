import Ember from 'ember';
let { $ } = Ember;

export default Ember.Component.extend({
	showDialog: false,
	statusMessage: "",
	statusPending: true,
	deletePage: false,
	actions: {
		publishSite() {
			// TODO: check model.hasDirtyAttributes before upload			      	
			let self = this;
	      	window.scrollTo(0, 0);
	      	self.set('statusPending', true);
	      	this.set('showDialog', true);
	      	this.set('statusMessage', "Seiten werden publiziert.");
	      	let url = "http://localhost:1313/api/site/publish";
			return $.ajax({
				type: 'POST',
				url: url
			}).done(function(data, textStatus, jqXHR) {
				self.set('statusMessage', jqXHR.responseJSON.output);
				self.set('statusPending', false);				    
			}).fail(function(jqXHR) {											
				self.set('statusMessage', jqXHR.responseText);			    
				self.set('statusPending', false);
			});
	    },
	    previewSite() {
	      	let self = this;
	      	window.scrollTo(0, 0);
	      	self.set('statusPending', true);
	      	this.set('showDialog', true);
	      	this.set('statusMessage', "Vorschau wird erstellt.");
	      	let url = "http://localhost:1313/api/site/preview";
			return $.ajax({
				type: 'POST',
				url: url
			}).done(function(data, textStatus, jqXHR) {
				self.set('statusMessage', jqXHR.responseJSON.output);
				self.set('statusPending', false);				    
			}).fail(function(jqXHR) {											
				self.set('statusMessage', jqXHR.responseText);			    
				self.set('statusPending', false);
			});
	    },
	    closeDialog() {
	    	this.set('showDialog', false);
	    },
	    deleteRegion(model) {
	    	this.sendAction('deleteRegionAction', model);
	    },
	    updateRegion(model) {
	    	// TODO: set model.hasDirtyAttributes = false
	    	window.scrollTo(0, 0);
	    	this.sendAction('updateRegionAction', model);
	    },
	    deleteTopic(model) {
	    	this.sendAction('deleteTopicAction', model);
	    },
	    updateTopic(model) {
	    	// TODO: set model.hasDirtyAttributes = false
	    	window.scrollTo(0, 0);
	    	this.sendAction('updateTopicAction', model);
	    },
	    deleteExcursion(model) {
	    	this.sendAction('deleteExcursionAction', model);
	    },
	    updateExcursion(model) {
	    	// TODO: set model.hasDirtyAttributes = false
	    	window.scrollTo(0, 0);
	    	this.sendAction('updateExcursionAction', model);
	    }
	}
});
