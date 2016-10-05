import Ember from 'ember';

export default Ember.Controller.extend({
		
	actions: {
		getExcursion() {
            console.log(this.get('model.exkursion'));
        },
		updateExcursion: function() {
			
		},
		showRelatedRegion: function() {
			this.transitionToRoute('region.edit', `${regionName}.md`);
		}
	}
	
});
