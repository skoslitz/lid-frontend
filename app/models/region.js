import DS from 'ember-data';

export default DS.Model.extend({
	path: DS.attr("string"),
	title: DS.attr("string"),
	subtitle: DS.attr("string"),
	description: DS.attr("string"),
	date: DS.attr("string"),
	dateOfPublication: DS.attr("string"),
	editor: DS.attr("string"),
	editorInstitut: DS.attr("string"),
	isbn: DS.attr("string"),
	location: DS.attr("string"),	
	editionTitle: DS.attr("string"),
	pagination: DS.attr("number"),
	extent: DS.attr("array"),
	publisher: DS.attr("string"),
	bundesland: DS.attr("array"),
	content: DS.attr("string"),
	excursions: DS.hasMany("excursion"),
	//topics: DS.hasMany("topic")
});