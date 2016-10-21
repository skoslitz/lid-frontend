import Ember from 'ember';

export default Ember.Component.extend({
	createRegion: false,
	createTopic: false,
	createExcursion: false,	
	actions: {
		openCreateExcursionDialog() {
			this.sendAction('createExcursionAction');			
		},
		openPromptDialog(){
	    	this.set('showPromptDialog', true) 
	    },
	    closePromptDialog() {
	    	this.set('showPromptDialog', false)
	    },
	    createRegion(regionId, regionName) {
	    	console.log("Dir-content component receive action and sends to route");
	    	this.sendAction('createRegionAction', regionId, regionName);
	    },
	}
});
