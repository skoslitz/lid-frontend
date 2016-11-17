import Ember from 'ember';

export default Ember.Route.extend({
	model: function(params) {
      return Ember.RSVP.hash({
        region: this.store.findRecord('region', params.id),
        topicList: this.store.query('topic-list', {id: params.id})

      });
  },
  setupController(controller, models) {
    controller.set('region', models.region);
    controller.set('topicList', models.topicList);
  },
  actions: {
    regionList() {
          this.transitionTo('/');
      },
  }
});
