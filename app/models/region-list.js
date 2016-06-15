import DS from 'ember-data';

export default DS.Model.extend({
	name: DS.attr("string"),
	path: DS.attr("string"),
	isDir: DS.attr("boolean"),
	size: DS.attr("number"),
	modTime: DS.attr("string"),
	edition: DS.attr("string")  
});
