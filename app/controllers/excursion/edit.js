import Ember from 'ember';

export default Ember.Controller.extend({
    updateDialog: false,
    deleteDialog: false,
    setMapExtentDialog: false,
    mapConfig: {},
    actions: {
      openDeleteDialog() {
        console.log('open dialog from ctrl');
        this.set('deleteDialog', true);
      },
      closeDeleteDialog() {
        console.log('close dialog from ctrl');
        this.set('deleteDialog', false);
      },
      closeSetMapExtentDialog() {
        this.set('setMapExtentDialog', false);
      },
      updateExcursion: function() {
        this.set('updateDialog', true);

        var regionId;
        this.get('model').get('region').then(function(region) {
          regionId = region.get('id');
        });


        var self = this
        this.get('model').save().then(()=>{
          Ember.run.later((function() {
            self.transitionToRoute('excursion-list', regionId)
            self.set('updateDialog', false);
          }), 1200);
        });
      },
      deleteExcursion() {
        let excursionId = this.get('model.id');
        let store = this.get('store');
        let self = this;

        store.findRecord('excursion', excursionId).then(function(excursion) {
          excursion.deleteRecord();
              excursion.save().then(()=>{
                console.log("record deleted");
                self.transitionToRoute('index');
              });
        })
      },
      showRelatedRegion: function() {
        this.transitionToRoute('region.edit', `${regionName}.md`);
      },
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
      setMapExtent() {
        this.set('setMapExtentDialog', true);
      },
      queryMapExtent(e) {
        let location = e.target.getCenter();
        let zoom = e.target.getZoom()
        let _mapConfig = {
          lat: location.lat.toFixed(7),
          lon: location.lng.toFixed(7),
          zoom: zoom
        };
        this.set('mapConfig', _mapConfig);
      },
      saveMapExtent() {
        this.set('model.centroid', [this.get('mapConfig.lat'), this.get('mapConfig.lon')]);
        this.set('model.zoomstufe', this.get('mapConfig.zoom'));
        this.set('setMapExtentDialog', false);
      },
      addExcursionStation() {
        let e = this.get('model.exkursion')
        e.pushObject({
          lat: this.get('model.centroidLat'),
          lon: this.get('model.centroidLon'),
          nr: (e.length + 1)
        });
        this.set('model.exkursionsstationen', e.length);
      },
      removeExcursionStation() {
        let e = this.get('model.exkursion')
        e.popObject();
        this.set('model.exkursionsstationen', e.length);
      },
      uploadImageAction() {
        let hugoId = this.get('model.hugoId');
        console.log("ctrl get uploadImage action for ", hugoId);

      }

    }
});
