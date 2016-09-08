import Ember from 'ember';

export default Ember.Route.extend({
	
	actions: {
		publishSite() {
			console.log("get action from component")
		},
		previewSite() {
			console.log("get previewSite action from component")
		},
		savePage(page) {
			console.log("get savePage action from component", page)
		},
		saveRegion(regionId, regionName) {
	    	console.log("Route receive action with", regionId, regionName)
			let newRegion = this.store.createRecord('region', {
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

			newRegion.save().then((response) => {
				this.set('showPromptDialog', false);
				this.transitionToRoute('region.edit', `${regionId}-${regionName}.md`);			
			});
	    },
	},
	model() {
    	return this.store.findAll('region-list', { reload: true }); 
  	}
});
