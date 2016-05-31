import DS from 'ember-data';

export default DS.Model.extend({
	path: DS.attr('string'),
	date: DS.attr('string'),
	title: DS.attr('string'),
	content: DS.attr('string')
});
