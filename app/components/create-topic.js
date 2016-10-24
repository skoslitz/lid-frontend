import Ember from 'ember';

export default Ember.Component.extend({
	showPromptDialog: false,
	actions: {
		closeCreateTopicDialog() {
    		this.sendAction('closeCreateTopicDialogAction');
	    },
	    createTopicAction() {
			    this.sendAction('createTopicConfirmedAction');
	    },
	}
});
