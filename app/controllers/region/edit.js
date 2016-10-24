import Ember from 'ember';

export default Ember.Controller.extend({
	createTopic: false,
	createExcursion: false,
	updateDialog: false,
	deleteDialog: false,
	actions: {
		openCreateTopicDialog() {
			this.set('createTopic', true);
		},
		closeCreateTopicDialog() {
			this.set('createTopic', false);
		},
		createTopicConfirmed() {
			console.log("region-edit ctrl creates Topic");
		},
		openCreateExcursionDialog() {
			this.set('createExcursion', true);
		},
		closeCreateExcursionDialog() {
			this.set('createExcursion', false);
		},
		createExcursionConfirmed() {
			console.log("region-edit ctrl creates excursion");
		},
		updateRegion() {
			this.set('updateDialog', true);

			var self = this
			this.get('region').save().then(()=>{
				Ember.run.later((function() {
			  	self.transitionToRoute('index')
			  	self.set('updateDialog', false);
				}), 1200);
			});
		},
		openDeleteDialog() {
			this.set('deleteDialog', true);
		},
		closeDeleteDialog() {
			this.set('deleteDialog', false);
		},
		deleteRegion() {
			let regionId = this.get('region.id');
			let store = this.get('store');
			let self = this;

			store.findRecord('region', regionId).then(function(region) {
				region.deleteRecord();
    	  		region.save().then(()=>{
    	  			console.log("record deleted");
    	  			self.transitionToRoute('index');
    	  		});
			})
		}
	}
});