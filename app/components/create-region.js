import Ember from 'ember';

export default Ember.Component.extend({
	showPromptDialog: false,
	actions: {
			umlautCheck() {
				console.log(event);
				let value = this.get('model.title') || ""

				switch (event.keyCode) {
					// ä Umlaut to ae
					case 222:
						this.set('model.title', `${value}ae`);
						event.returnValue = false;
						break;
					// ö Umlaut to oe
					case 186:
						this.set('model.title', `${value}oe`);
						event.returnValue = false;
						break;
					// ü Umlaut to ue
					case 219:
						this.set('model.title', `${value}ue`);
						event.returnValue = false;
						break;
					default:
						console.log('ok--');
				}
			},
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
