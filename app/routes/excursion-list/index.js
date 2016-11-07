import Ember from 'ember';

export default Ember.Route.extend({
  model: function(params) {
      return Ember.RSVP.hash({
        region: this.store.findRecord('region', params.id),
        excursionList: this.store.query('excursion-list', {id: params.id})

      });
  },
  setupController(controller, models) {
    controller.set('region', models.region);
    controller.set('excursionList', models.excursionList);
  },
  actions: {
    regionList() {
          this.transitionTo('/');
      },
  }
});
