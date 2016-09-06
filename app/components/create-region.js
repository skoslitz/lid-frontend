import Ember from 'ember';

export default Ember.Component.extend({
	showPromptDialog: false,
	actions: {
		openPromptDialog(){
	    	this.set('showPromptDialog', true) 
	    },
	    closePromptDialog() {
	    	this.set('showPromptDialog', false)
	    },
	    saveRegion() {
	    	let regionId = this.get('model.id');
			let regionName = this.get('model.title');
			console.log("create region comp sends action");
			this.sendAction('saveRegionAction', regionId, regionName);
	    },
	}
});
