import Ember from 'ember';

export default Ember.Controller.extend({
    updateDialog: false,
    deleteDialog: false,
    rubriken: [
      "Siedlung & Bevölkerung",
      "Wirtschaft & Verkehr",
      "Natur & Landschaft",
      "Vergangenheit & Erinnerung",
      "Kultur & Soziales"
    ],
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

         let topicId = this.get('model.id');

        var self = this
        this.get('model').save().then(()=>{
          Ember.run.later((function() {
            //self.transitionToRoute('topic-list', regionId);
            self.transitionToRoute('topic.edit', topicId);
            self.set('updateDialog', false);
          }), 1200);
        });
      },
      deleteTopic() {
        let topicId = this.get('model.id');
        let store = this.get('store');
        var regionId;
        this.get('model').get('region').then(function(region) {
          regionId = region.get('id');
        });
        let self = this;

        store.findRecord('topic', topicId, { backgroundReload: false }).then(function(topic) {
          topic.deleteRecord();
              topic.save().then(()=>{
                console.log("record deleted");
                self.set('deleteDialog', false);
                self.transitionToRoute('topic-list', regionId);
              });
        })
      },
      showRelatedRegion: function() {
        this.transitionToRoute('region.edit', `${regionName}.md`);
      },
      removeItem(item) {
        let rubriken = this.get('model.rubriken');
        rubriken.removeObject(item); 
      },
      addItem(item) {
        let rubriken = this.get('model.rubriken');
        rubriken.pushObject(item);        
      },
      addReference() {
        let literaturangaben = this.get('model.literaturangaben');
        let literaturangabe = "AutorIn (Jahr): Titel";
        literaturangaben.pushObject(literaturangabe);
      },
      removeReference() {
        let literaturangaben = this.get('model.literaturangaben');        
        literaturangaben.removeObject(literaturangaben.get('lastObject'));
      },
    }
});
