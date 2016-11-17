import Ember from 'ember';

export default Ember.Component.extend({
	articleNumber: null,
	articleName: "",
	actions: {
		closeCreateTopicDialog() {
    		this.sendAction('closeCreateTopicDialogAction');
	    },
	    createTopicAction() {
	    	let topicMeta = {
				"articleNumber": parseInt(this.get('articleNumber')),
				"articleName": this.get('articleName')
			};
			this.sendAction('createTopicConfirmedAction', topicMeta);
	    },
	}
});
