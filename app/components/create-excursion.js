import Ember from 'ember';

export default Ember.Component.extend({
	articleNumber: null,
	articleName: "",
	externalExcursion: false,
	actionBound: false,
	actions: {
		closeCreateExcursionDialog() {
    		this.sendAction('closeCreateExcursionDialogAction');
	    },
	    createExcursionAction() {
			let excursionMeta = {
				"articleNumber": parseInt(this.get('articleNumber')),
				"articleName": this.get('articleName'),
				"externalExcursion": this.get('externalExcursion'),
				"actionBound": this.get('actionBound')
			};
			this.sendAction('createExcursionConfirmedAction', excursionMeta);
	    },
	}
});
