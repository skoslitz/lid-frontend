import Ember from 'ember';

export default Ember.Component.extend({
	actions: {
		regionList() {
			console.log("redirect ...");
			this.sendAction('showRegionListAction');
	    },
	    historyBack() {
	    	console.log("tbd");
	    },
	    relatedRegion() {
	    	console.log("tbd");
	    }	    
	}
});
