import Ember from 'ember';

export default Ember.Route.extend({
  model: function(params) {
      return Ember.RSVP.hash({
        region: this.store.findRecord('region', params.id),
        excursion: this.store.query('excursion-list', {id: params.id}),
        topic: this.store.query('topic-list', {id: params.id})       
      });      
  },
  setupController(controller, models) {
    controller.set('region', models.region);
    controller.set('excursion', models.excursion);
    controller.set('topic', models.topic);
    // or, more concisely:
    // controller.setProperties(models);
  },
  actions: {
    //site nav actions
    regionList() {
      this.transitionTo('/');
    },
    // editor dock actions
    deletePage(model) {
      let store = this.get('store');
      store.findRecord('region', model).then(function(region) {
        //store.unloadRecord(region);
        store.deleteRecord(region);
        region.save();                  
      });
      
      this.transitionTo('index');
    },
    updatePage(model) {
      console.log('updateRegion action');
    }
  },  
});

