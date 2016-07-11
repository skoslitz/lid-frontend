import DS from 'ember-data';

export default DS.Model.extend({
	// Attributes
  	name: DS.attr("string"),
	path: DS.attr("string"),
	isDir: DS.attr("boolean"),
	size: DS.attr("number"),
	modTime: DS.attr("string")
});
