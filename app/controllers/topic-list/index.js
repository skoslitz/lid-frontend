import Ember from 'ember';

export default Ember.Controller.extend({
	createTopicButton: true,
	createTopic: false,
	actions: {
		openCreateTopicDialog() {
			this.set('createTopic', true);
		},
		closeCreateTopicDialog() {
			this.set('createTopic', false);
		},
		createTopicConfirmed(topicMeta) {
			console.log("Topic-list ctrl creates Topic", topicMeta);
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
	}
});