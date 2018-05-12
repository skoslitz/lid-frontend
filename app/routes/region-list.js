import Ember from 'ember';

export default Ember.Route.extend({
  model() {
      return this.store.findAll('region-list', { reload: true });
    },
  actions: {
    publishSite() {
      console.log("get action from component");
    },
    previewSite() {
      console.log("get previewSite action from component");
    },
    savePage(page) {
      console.log("get savePage action from component", page);
    },
    saveRegion(regionId, regionName) {
        console.log("Route receive action with", regionId, regionName);

        var store = this.get('store');
        var newRegion = store.createRecord('region', {
        id: `${regionId}-${regionName}.md`,
        bandnummer: regionId,
        title: regionName,
        path: `regionen/${regionId}-${regionName}.md`,
        subtitle: "",
        description: "some text",
        date: "",
        dateOfPublication: "",
        editor: "",
        editorInstitut: "",
        isbn: "",
        location: "",
        editionTitle: "",
        pagination: 100,
        extent: [],
        publisher: "",
        bundesland: ["Sachsen", "Thüringen"],
        content: "some content text"
      });

        var self = this;

      function transitionToPost(regionId, regionName) {
        self.transitionTo('region.edit', `${regionId}-${regionName}.md`);
      }

      function failure(reason) {
        console.log(reason);
      }

      newRegion.save().then(transitionToPost(regionId, regionName)).catch(failure);
      },
  }
});
