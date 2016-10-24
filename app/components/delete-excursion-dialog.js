import Ember from 'ember';

export default Ember.Component.extend({
	actions: {
		closeDialog() {    		
    		this.sendAction('closeDeleteDialogAction');
	    },
	    deleteExcursionConfirmed() {	    
			this.sendAction('deleteExcursionConfirmedAction');
	    },
	}	
});
