import Ember from 'ember';

export default Ember.Controller.extend({
    updateDialog: false,
    deleteDialog: false,
    setMapExtentDialog: false,
    mapConfig: {},
    exkursionstypen: [
      "Fahrrad",
      "Fuß",
      "Auto"
    ],
    actions: {
      excursionList() {
        var regionId;
        var self = this;
        this.get('model').get('region').then(function(region) {
          regionId = region.get('id');
          self.transitionToRoute('excursion-list', regionId);
        });
      },
      relatedRegion() {
        var regionId;
        var self = this;
        this.get('model').get('region').then(function(region) {
          regionId = region.get('id');
          self.transitionToRoute('region.edit', regionId);
        });
      },
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

        let excursionId = this.get('model.id');

        var self = this;
        this.get('model').save().then(()=>{
          Ember.run.later((function() {
            //self.transitionToRoute('excursion-list', regionId);
            self.transitionToRoute('excursion.edit', excursionId);
            self.set('updateDialog', false);
          }), 1200);
        });
      },
      updateCover(image) {
        this.set('model.cover', image.filename);
      },
      updatePreviewCover(image) {
        this.set('model.previewCover', image.filename);
      },
      deleteExcursion() {
        let excursionId = this.get('model.id');
        let store = this.get('store');
        var regionId;
        this.get('model').get('region').then(function(region) {
          regionId = region.get('id');
        });
        let self = this;

        store.findRecord('excursion', excursionId, { backgroundReload: false }).then(function(excursion) {
          excursion.deleteRecord();
              excursion.save().then(()=>{
                console.log("record deleted");
                self.set('deleteDialog', false);
                 self.transitionToRoute('excursion-list', regionId);
              });
        });
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
        let zoom = e.target.getZoom();
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
        let e = this.get('model.exkursion');
        e.pushObject({
          lat: this.get('model.centroidLat'),
          lon: this.get('model.centroidLon'),
          nr: (e.length + 1)
        });
        this.set('model.exkursionsstationen', e.length);
      },
      removeExcursionStation() {
        let e = this.get('model.exkursion');
        e.popObject();
        this.set('model.exkursionsstationen', e.length);
      },
      removeCategory(item) {
        let exkursionstypen = this.get('model.exkursionstypen');
        exkursionstypen.removeObject(item);
      },
      addCategory(item) {
        let exkursionstypen = this.get('model.exkursionstypen');
        exkursionstypen.pushObject(item);
      },
      addReference(item) {
        let literaturangaben = this.get('model.literaturangaben');
        literaturangaben.pushObject(item);
      },
      removeReference(item) {
        let literaturangaben = this.get('model.literaturangaben');
        let answer = confirm (`${item} unwiederbringlich löschen?`);
        if (answer) {
          literaturangaben.removeObject(item);
        }

      },
      removeImgRef(item) {
        let bildnachweise = this.get('model.bildnachweise');
        let answer = confirm (`${item} unwiederbringlich löschen?`);
        if (answer) {
          bildnachweise.removeObject(item);
        }
      },
      addImgRef(item) {
        let bildnachweise = this.get('model.bildnachweise');
        bildnachweise.pushObject(item);
      },
      showReference(model) {
        console.log(model);
      }
    }
});
