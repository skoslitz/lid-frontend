import Ember from 'ember';

export default Ember.Controller.extend({

	actions: {
    updateLocation(excursion, index, e) {
      let location = e.target.getLatLng();
      Ember.setProperties(excursion, {
        lat: location.lat.toFixed(7),
        lon: location.lng.toFixed(7)
      });
      // Get model.excursion from store and update model.excursion[index]
      this.set(('model.exkursion')[index], {
      	lat: location.lat.toFixed(7),
        lon: location.lng.toFixed(7)
      });
     	// TODO
      // set model.hasDirtyAttributes to true
    },
		updateExcursion: function() {

		},
		showRelatedRegion: function() {
			this.transitionToRoute('region.edit', `${regionName}.md`);
		}
	}

});
