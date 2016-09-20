import DS from 'ember-data';

export default DS.Model.extend({
	// Attributes
	path: DS.attr("string"),	
	title: DS.attr("string"),
	subtitle: DS.attr("string"),
	date: DS.attr("string"),
	author: DS.attr("string"),
	description: DS.attr("string"),
	vgWort: DS.attr("string"),
	content: DS.attr("string"),
	cover: DS.attr("string"),
	coverSrc: DS.attr("string"),
	coverName: DS.attr("string"),
	categories: DS.attr('array'),
	
	// Associations
	region: DS.belongsTo('region'),
	images: DS.attr('array')
});