import Ember from 'ember';

export default Ember.Controller.extend({
	actions: {
		getExcursion() {
            console.log(this.get('model.exkursion'));
    },
    updateLocation(excursion, e) {
      let location = e.target.getLatLng();
      Ember.setProperties(excursion, {
        lat: location.lat.toFixed(7),
        lon: location.lng.toFixed(7)
      });
    },
		updateExcursion: function() {

		},
		showRelatedRegion: function() {
			this.transitionToRoute('region.edit', `${regionName}.md`);
		}
	}

});
