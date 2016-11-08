import Ember from 'ember';

export default Ember.Controller.extend({
	// needs to be dynamically set
  assetUrl: "/api/asset/img/78/reihe",
  createTopic: false,
	createExcursion: false,
	updateDialog: false,
	deleteDialog: false,
	actions: {
		openCreateTopicDialog() {
			this.set('createTopic', true);
		},
		closeCreateTopicDialog() {
			this.set('createTopic', false);
		},
		createTopicConfirmed() {
			console.log("region-edit ctrl creates Topic");
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
			};

			function failure(reason) {
			  console.log(reason);
			};

			newExcursion.save().then(transitionToPost(hugoId, sanitizeArticleName)).catch(failure);
		},
		updateRegion() {
			this.set('updateDialog', true);

			var self = this
			this.get('region').save().then(()=>{
				Ember.run.later((function() {
			  	self.transitionToRoute('index')
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

			store.findRecord('region', regionId).then(function(region) {
				region.deleteRecord();
    	  		region.save().then(()=>{
    	  			console.log("record deleted");
    	  			self.transitionToRoute('index');
    	  		});
			})
		}
	}
});