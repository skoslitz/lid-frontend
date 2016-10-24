import Ember from 'ember';

export default Ember.Controller.extend({
    updateDialog: false,
    deleteDialog: false,
    actions: {
      openDeleteDialog() {
        console.log('open dialog from ctrl');
        this.set('deleteDialog', true);
      },
      closeDeleteDialog() {
        console.log('close dialog from ctrl');
        this.set('deleteDialog', false);
      },
      updateExcursion: function() {
        this.set('updateDialog', true);
        
        var self = this
        this.get('model').save().then(()=>{
          Ember.run.later((function() {
            self.transitionToRoute('index')
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
      }      
    }
});
