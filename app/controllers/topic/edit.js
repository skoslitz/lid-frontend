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
      topicList() {
        var regionId;
        var self = this;
        this.get('model').get('region').then(function(region) {
          regionId = region.get('id');
          self.transitionToRoute('topic-list', regionId);
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
      updateCover(file) {
        this.set('model.cover', file)     
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
      removeCategory(item) {
        let rubriken = this.get('model.rubriken');
        rubriken.removeObject(item); 
      },
      addCategory(item) {
        let rubriken = this.get('model.rubriken');
        rubriken.pushObject(item);        
      },
      addReference(item) {
        let literaturangaben = this.get('model.literaturangaben');        
        literaturangaben.pushObject(item);
      },
      removeReference(item) {
        let literaturangaben = this.get('model.literaturangaben');        
        literaturangaben.removeObject(item); 
      },
      removeImgRef(item) {
        let bildnachweise = this.get('model.bildnachweise');
        bildnachweise.removeObject(item);       
      },
      addImgRef(item) {
        let bildnachweise = this.get('model.bildnachweise');
        bildnachweise.pushObject(item);        
      },
      addVideo() {
        let newVideo = [
          {
            "beschreibung": "",
            "id": "",
            "laenge": "",
            "quelle": "",
            "titel": "",
            }
        ];
        this.set('model.video', newVideo);        
      },
      removeVideo() {
        this.set('model.video', undefined);
      }
    }
});
