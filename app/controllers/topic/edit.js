import Ember from 'ember';

export default Ember.Controller.extend({
    // needs to be dynamically set
    assetUrl: "/api/asset/img/78/reihe",
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
      updateTopic: function() {
        this.set('updateDialog', true);

        var regionId;
        this.get('model').get('region').then(function(region) {
          regionId = region.get('id');
        });

        var self = this
        this.get('model').save().then(()=>{
          Ember.run.later((function() {
            self.transitionToRoute('topic-list', regionId)
            self.set('updateDialog', false);
          }), 1200);
        });
      },
      deleteTopic() {
        let topicId = this.get('model.id');
        let store = this.get('store');
        let self = this;

        store.findRecord('topic', topicId).then(function(topic) {
          topic.deleteRecord();
              topic.save().then(()=>{
                console.log("record deleted");
                self.transitionToRoute('index');
              });
        })
      },
      showRelatedRegion: function() {
        this.transitionToRoute('region.edit', `${regionName}.md`);
      }
    }
});
