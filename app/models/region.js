import DS from 'ember-data';

export default DS.Model.extend({
	// Attributes
	hugoId: DS.attr('string'),
	path: DS.attr('string'),
	bandnummer: DS.attr('number'),
	title: DS.attr('string'),
	subtitle: DS.attr('string'),
	description: DS.attr('string'),
	date: DS.attr('string'),
	modTime: DS.attr('date'),
	dateOfPublication: DS.attr('number'),
	editor: DS.attr('string'),
	editorInstitut: DS.attr('string'),
	isbn: DS.attr('string'),
	location: DS.attr('string'),
	editionTitle: DS.attr('string'),
	pagination: DS.attr('number'),
	extent: DS.attr(),
	publisher: DS.attr('string'),
	bundesland: DS.attr(),
	content: DS.attr('string'),
	cover: DS.attr('string'),
	images: DS.attr(''),
	staticUrl: Ember.computed('hugoId', function() {
		let bandnummer = this.get('bandnummer');
		return `${'assets/img/'+ bandnummer}`;
	}),
	assetUrl: Ember.computed('bandnummer', function() {
		let bandnummer = this.get('bandnummer');
		return `${'api/asset/img/'+ bandnummer}`;
	}),

	// Associations
	excursions: DS.hasMany('excursion'),
	topics: DS.hasMany('topic')

});