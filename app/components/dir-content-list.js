import Ember from 'ember';

export default Ember.Component.extend({
	createRegion: false,
	createTopic: false,
	createExcursion: false,
	showPromptDialog: false,
	actions: {
		openPromptDialog(){
	    	this.set('showPromptDialog', true) 
	    },
	    closePromptDialog() {
	    	this.set('showPromptDialog', false)
	    },
	    saveRegion(regionId, regionName) {
	    	console.log("Dir-content component receive action and sends to route");
	    	this.sendAction('saveRegionAction', regionId, regionName);
	    },
	}
});
