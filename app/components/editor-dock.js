import Ember from 'ember';

export default Ember.Component.extend({
	deletePage: false,
	actions: {
		publishSite() {
			console.log("send publishSite Action to bubble up ...")
			this.sendAction('publishSiteAction');
	    },
	    previewSite() {
	      	console.log("send previewSite Action to bubble up ...")
			this.sendAction('previewSiteAction');
	    },
	    savePage() {
	    	let page = {"id": "78_B_187-title.md"}
	    	console.log("send savePage Action to bubble up ...")
			this.sendAction('savePageAction', page);
	    },
	    openHelper() {

	    },
	    deletePage(model) {
	    	this.sendAction('deletePageAction', model);		
	    },		
	}
});
