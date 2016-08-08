import Ember from 'ember';

export default Ember.Component.extend({
	deletePage: false,
	showPromptDialog : false,
	actions: {
		openPromptDialog(){
	    	this.set('showPromptDialog', true) 
	    },
	    closePromptDialog(){
	      	this.set('showPromptDialog', false)
	    },
	    saveRegion() {
			const regionId = this.get('region.id');
			const regionName = this.get('region.title');

			const newRegion = this.store.createRecord('region', {
				bandnummer: regionId,
				title: regionName,
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
			});

			newRegion.save().then((response) => {
				this.set('region.id', '');
				this.set('region.title', '');
				this.set('showPromptDialog', false);
				this.transitionToRoute('region.edit', `${regionId}-${regionName}.md`);				
			});

	    },				
	}
});
