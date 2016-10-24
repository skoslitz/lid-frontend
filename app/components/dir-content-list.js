import Ember from 'ember';

export default Ember.Component.extend({
	createRegion: false,
	createTopic: false,
	createExcursion: false,
	actions: {
		openCreateTopicDialog() {
			this.sendAction('createTopicAction');
		},
		openCreateExcursionDialog() {
			this.sendAction('createExcursionAction');
		},
    	createRegion(regionId, regionName) {
    		console.log("Dir-content component receive action and sends to route");
    		this.sendAction('createRegionAction', regionId, regionName);
    },
	}
});
