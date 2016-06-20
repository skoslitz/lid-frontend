import DS from 'ember-data';

export default DS.Model.extend({
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
	coverName: DS.attr("string")
	//categories: DS.hasMany('category', {async: true }),
});