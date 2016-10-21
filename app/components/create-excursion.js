import Ember from 'ember';

export default Ember.Component.extend({
	actions: {
		closeDialog() {    		
    		this.sendAction('closeCreateExcursionDialogAction');
	    },
	    createExcursionConfirmed() {	    
			this.sendAction('createExcursionConfirmedAction');
	    },
	}	
});
