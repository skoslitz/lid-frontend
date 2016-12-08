import Ember from 'ember';

export default Ember.Controller.extend({
	createTopic: false,
	createExcursion: false,
	updateDialog: false,
	deleteDialog: false,
	bundeslaender: [
      "Baden-Württemberg",
      "Bayern",
      "Berlin",
      "Brandenburg",
      "Bremen",
      "Hamburg",
      "Hessen",
      "Mecklenburg-Vorpommern",
      "Niedersachsen",
      "Nordrhein-Westfalen",
      "Rheinland-Pfalz",
      "Saarland",
      "Sachsen",
      "Sachsen-Anhalt",
      "Schleswig-Holstein",
      "Thüringen"
    ],
	actions: {
		openCreateTopicDialog() {
			this.set('createTopic', true);
		},
		closeCreateTopicDialog() {
			this.set('createTopic', false);
		},
		createTopicConfirmed(topicMeta) {
			let bandnummer = this.get('region.bandnummer');
			
			let hugoId = bandnummer + "_B_" + topicMeta.articleNumber
	    	let sanitizeArticleName = topicMeta.articleName.toLowerCase().trim().dasherize();
	    	var store = this.get('store');
	    	let actualDate = new Date();

	    	var newTopic = store.createRecord('topic', {
				"id": `${hugoId}-${sanitizeArticleName}.md`,
				"path": `themen/${hugoId}-${sanitizeArticleName}.md`,
				"hugoId": hugoId,
                "autor": "",
                "title": topicMeta.articleName,
                "bildnachweise": [],
                "literaturangaben": [],
                "rubriken": [],
                "video": [],
                "date": actualDate,
                "description": "",
                "vg_wort_code": "",
                "vorschaubild": "",
                "content": ""
            });

	    	var self = this;

			function transitionToPost(hugoId, sanitizeArticleName) {
			  self.transitionToRoute('topic.edit', `${hugoId}-${sanitizeArticleName}.md`);
			};

			function failure(reason) {
			  console.log(reason);
			};

			newTopic.save().then(function() {
		        transitionToPost(hugoId, sanitizeArticleName);
		        self.set('createTopic', false);
		    }).catch(failure);
		},
		openCreateExcursionDialog() {
			this.set('createExcursion', true);
		},
		closeCreateExcursionDialog() {
			this.set('createExcursion', false);
		},
		createExcursionConfirmed(excursionMeta) {
			let bandnummer = this.get('region.bandnummer');
			console.log(excursionMeta);

			let hugoId = bandnummer + "_E_" + excursionMeta.articleNumber
	    	let sanitizeArticleName = excursionMeta.articleName.toLowerCase().trim().dasherize();
	    	var store = this.get('store');
	    	let actualDate = new Date();

	    	var newExcursion = store.createRecord('excursion', {
				"id": `${hugoId}-${sanitizeArticleName}.md`,
				"path": `exkursionen/${hugoId}-${sanitizeArticleName}.md`,
				"hugoId": hugoId,
                "autor": "",
                "title": excursionMeta.articleName,
                "bildnachweise": [],
                "literaturangaben": [],
                "centroid": [51.299247, 12.327872],
                "date": actualDate,
                "description": "",
                "exkursion": [{lat: 51, lon: 12, nr: 1}],
                "exkursionsende": "",
                "exkursionslaenge": 0,
                "exkursionsstart": "",
                "exkursionsstationen": 1,
                "exkursionstypen": [],
                "fremdexkursion": excursionMeta.externalExcursion,
                "actionbound": excursionMeta.actionBound,
                "vg_wort_code": "",
                "vorschaubild": "",
                "zoomstufe": 8,
                "content": ""
            });

	    	var self = this;

			function transitionToPost(hugoId, sanitizeArticleName) {
			  self.transitionToRoute('excursion.edit', `${hugoId}-${sanitizeArticleName}.md`);
			  self.set('createExcursion', false);
			};

			function failure(reason) {
			  console.log(reason);
			};

			newExcursion.save().then(transitionToPost(hugoId, sanitizeArticleName)).catch(failure);
		},
		updateRegion() {
			this.set('updateDialog', true);
			let regionId = this.get('region.id');

			var self = this
			this.get('region').save().then(()=>{
				Ember.run.later((function() {
			  	//self.transitionToRoute('index')
			  	self.transitionToRoute('region.edit', regionId)
			  	self.set('updateDialog', false);
				}), 1200);
			});
		},
		openDeleteDialog() {
			this.set('deleteDialog', true);
		},
		closeDeleteDialog() {
			this.set('deleteDialog', false);
		},
		deleteRegion() {
			let regionId = this.get('region.id');
			let store = this.get('store');
			let self = this;

			store.findRecord('region', regionId, { backgroundReload: false }).then(function(region) {
				region.deleteRecord();
    	  		region.save().then(()=>{
    	  			console.log("record deleted");
    	  			self.set('deleteDialog', false);
    	  			self.transitionToRoute('index');
    	  		});
			})
		},
		removeItem(item) {
	        let bundesland = this.get('region.bundesland');
	        bundesland.removeObject(item); 
      	},
		addItem(item) {
			let bundesland = this.get('region.bundesland');
			bundesland.pushObject(item);        
		},
	}
});