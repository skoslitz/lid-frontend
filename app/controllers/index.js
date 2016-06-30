import Ember from 'ember';

export default Ember.Controller.extend({
	showPromptDialog : false,
	region: {
		id: "",
		title: ""
	},
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
				id: regionId,
				title: regionName,
				path: "regionen/99-Ein-Beispielband.md",			
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
				bundesland: [],
				content: ""
			});

/*			newRegion.save().then((response) => {
			 	this.set('responseMessage', `Neuer Band (Nummer: ${response.get('id')} wurde gespeichert ) `);

				this.set('region.id', '');
				this.set('region.title', '');
				this.set('showPromptDialog', false);
			});*/

	    }
	}
});