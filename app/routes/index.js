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
		createRegion(bandnummer, regionName) {
	    	let sanitizeRegionName = regionName.toLowerCase().trim().dasherize()
		    	.replace(/ä|ö|ü|ß/gi, function(keyValue) {
		    		switch (keyValue) {
						// ä Umlaut to ae
						case "ä":
							return "ae"
							break;
						// ö Umlaut to oe
						case "ö":
							return "oe"
							break;
						// ü Umlaut to ue
						case "ü":
							return "ue"
							break;
						case "ß":
                return "ss"
                break;
						default:
							return;
					}
	    	});

	    	var store = this.get('store');
	    	let actualDate = new Date();

	    	var newRegion = store.createRecord('region', {
				id: `${bandnummer}-${sanitizeRegionName}.md`,
				bandnummer: parseInt(bandnummer),
				title: regionName,
				path: `regionen/${bandnummer}-${sanitizeRegionName}.md`,
				subtitle: "",
				description: "",
				date: actualDate,
				dateOfPublication: "",
				editor: "",
				editorInstitut: "Leibniz-Institut für Länderkunde e.V. und Sächsische Akademie der Wissenschaften zu Leipzig",
				isbn: "",
				location: "",
				editionTitle: "Landschaften in Deutschland",
				pagination: parseInt(100),
				extent: [],
				publisher: "Böhlau Verlag",
				bundesland: [],
				content: ""
			});

	    	var self = this;

			function transitionToPost(bandnummer, sanitizeRegionName) {
			  self.transitionTo('region.edit', `${bandnummer}-${sanitizeRegionName}.md`);
			}

			function failure(reason) {
			  console.log(reason);
			}

			newRegion.save().then(transitionToPost(bandnummer, sanitizeRegionName)).catch(failure);
	    },
	}
});
