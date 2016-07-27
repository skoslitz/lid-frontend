import DS from 'ember-data';

export default DS.Model.extend({
	// Attributes
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
	bundesland: DS.attr('array'),
	content: DS.attr('string'),
	
	// Associations
	excursions: DS.hasMany('excursion'),
	topics: DS.hasMany('topic')
});