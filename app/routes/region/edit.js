import Ember from 'ember';

export default Ember.Route.extend({
  model: function(params) {
      console.log("model hook from route --> ", params);
      let model = {}
      model.region = this.store.findRecord('region', params.id);
      model.excursion = this.store.query('excursion-list', {
        id: params.id
      });
      model.topic = this.store.query('topic-list', {
        id: params.id
      });
      
      return model
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

