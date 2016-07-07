import DS from 'ember-data';

export default DS.Model.extend({
	title: DS.attr('string'),
	baseurl: DS.attr('string'),
	contentdir: DS.attr('string'),
	layoutdir: DS.attr('string'),	
	author: DS.attr('string'),
	copyright: DS.attr('string')
});
