import Ember from 'ember';
let { $ } = Ember;

export default Ember.Component.extend({
  showDialog: false,
  publishGuide: false,
	previewGuide: false,
	statusMessage: "",
	deletePage: false,
	actions: {
		publishSite() {
				let self = this;
      	window.scrollTo(0, 0);
        this.set('showDialog', true);
      	this.set('publishGuide', true);
	  },
    previewSite() {
      	let self = this;
      	window.scrollTo(0, 0);
        this.set('showDialog', true);
      	this.set('previewGuide', true);
    },
    refreshPage() {
    	this.sendAction('refreshPageAction');
    },
    closeDialog() {
    	this.set('showDialog', false);
      this.set('publishGuide', false);
      this.set('previewGuide', false);
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
