import Ember from 'ember';

export default Ember.Controller.extend({
	updateDialog: false,
	deleteDialog: false,
	shouldRemove: false,
	actions: {

		deleteRegion() {
			this.set('deleteDialog', true);

			let regionId = this.get('model.region.id');
			let store = this.get('store');

			if (this.get('shouldRemove')) {
				store.findRecord('region', regionId).then(function(region) {
					region.deleteRecord();
      		region.save();
				});
				this.transitionToRoute('index');
			}
	  },
	    updateRegion: function() {
			this.set('updateDialog', true);

			var self = this
			this.get('region').save().then(()=>{
				Ember.run.later((function() {
			  	self.transitionToRoute('index')
			  	self.set('updateDialog', false);
				}), 1200);
			});
		},
	}
});