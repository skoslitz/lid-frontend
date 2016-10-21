import Ember from 'ember';

export default Ember.Controller.extend({
	createExcursionButton: true,
	createExcursion: false,
	actions: {
		openCreateExcursionDialog() {
			this.set('createExcursion', true);
		},
		closeCreateExcursionDialog() {
			this.set('createExcursion', false);
		},
		createExcursionConfirmed() {
			console.log("create excursion");
		},			    
	}
});