import Ember from 'ember';

export default Ember.Controller.extend({
	showDialog: false,
	actions: {
		deleteRegion() {
			console.log("Controller got Action from comp");
			let regionId = this.get('model.region.id');
			let store = this.get('store');
			store.findRecord('region', regionId).then(function(region) {
				region.deleteRecord();
        		region.save();
			});
			this.transitionToRoute('index');
	    },
	    updateRegion: function() {
			this.set('showDialog', true);

			var self = this
			this.get('region').save().then(()=>{
				Ember.run.later((function() {
			  	self.transitionToRoute('index')
			  	self.set('showDialog', false);
				}), 1200);
			});
		},
	}
});