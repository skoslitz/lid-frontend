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
	    createRegion() {
	    	let bandnummer = this.get('model.bandnummer');
			let regionName = this.get('model.title');
			console.log("create region comp sends action");
			this.sendAction('createRegionAction', bandnummer, regionName);
	    },
	}
});
