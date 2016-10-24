import Ember from 'ember';

export default Ember.Component.extend({
	actions: {
		closeDialog() {    		
    		this.sendAction('closeDeleteDialogAction');
	    },
	    deleteTopicConfirmed() {	    
			this.sendAction('deleteTopicConfirmedAction');
	    },
	}	
});
