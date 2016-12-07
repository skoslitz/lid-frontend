import Ember from 'ember';

export default Ember.Component.extend({
	actions: {
		regionList() {
			this.sendAction('showRegionListAction');
	    },
	    relatedRegion() {
	    	this.sendAction('relatedRegionAction');
	    },
	    contentList() {
	    	this.sendAction('contentListAction');
	    }	    
	}
});
