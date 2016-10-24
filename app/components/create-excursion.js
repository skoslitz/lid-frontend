import Ember from 'ember';

export default Ember.Component.extend({
	actions: {
		closeCreateExcursionDialog() {
    		this.sendAction('closeCreateExcursionDialogAction');
	    },
	    createExcursionAction() {
			this.sendAction('createExcursionConfirmedAction');
	    },
	}
});
