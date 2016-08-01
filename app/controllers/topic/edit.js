import Ember from 'ember';

export default Ember.Controller.extend({
	actions: {
		updateExcursion: function() {
			
		},
		showRelatedRegion: function() {
			this.transitionToRoute('region.edit', `${regionName}.md`);
		}
	}
});
