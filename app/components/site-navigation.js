import Ember from 'ember';

export default Ember.Component.extend({
	actions: {
		regionList() {
			console.log("redirect ...");
			this.sendAction('showRegionListAction');
	    },
	    historyBack() {
	    	window.history.back();
	    },
	    relatedRegion() {
	    	console.log("tbd");
	    }	    
	}
});
