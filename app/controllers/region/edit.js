import Ember from 'ember';

export default Ember.Controller.extend({
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
			this.get('region').save().then(()=>{
				this.transitionToRoute('index')
			});    
		},
	}
});