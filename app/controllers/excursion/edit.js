import Ember from 'ember';

export default Ember.Controller.extend({
	actions: {
		handleTrixAction: function(jqEvent) {
			console.log(jqEvent)
		},
		updateExcursion: function() {
			
		},
		showRelatedRegion: function() {
			this.transitionToRoute('region.edit', `${regionId}-${regionName}.md`);
		}
	}
});
