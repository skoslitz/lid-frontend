import Ember from 'ember';

export default Ember.Controller.extend({
	actions: {
		updateRegion() {

			let filename = this.get('model.region.filename');
			let	bandnummer = this.get('model.region.bandnummer');
			/*title: regionName,
			path: `regionen/${regionId}-${regionName}.md`,
			subtitle: "",
			description: "",
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
			*/
						
			this.get('store').findRecord('region', filename).then(function(updatedRegion) {
				updatedRegion.set('subtitle', bandnummer);
				updatedRegion.save().then((response) => {
					console.log(response);
					this.transitionToRoute('index');				
				});
			});
	    },
	}
});