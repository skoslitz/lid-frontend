import Ember from 'ember';

export default Ember.Controller.extend({

	actions: {
    updateLocation(excursion, index, e) {
      let location = e.target.getLatLng();
      Ember.setProperties(excursion, {
        lat: location.lat.toFixed(7),
        lon: location.lng.toFixed(7)
      });
      // TODO
      // Get model.excursion from store and update model.excursion[index]
      console.log(index);
      console.log(this.get('store'));
      // this.model.set('excursion', [location.lat.toFixed(7), location.lng.toFixed(7)]);
    },
		updateExcursion: function() {

		},
		showRelatedRegion: function() {
			this.transitionToRoute('region.edit', `${regionName}.md`);
		}
	}

});
