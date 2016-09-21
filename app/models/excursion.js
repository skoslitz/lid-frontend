import DS from 'ember-data';

export default DS.Model.extend({
	// Attributes
	path: DS.attr('string'),	
	title: DS.attr('string'),
	date: DS.attr('string'),
	description: DS.attr('string'),
	vgWortCode: DS.attr('string'),
	content: DS.attr('string'),
	images: DS.attr('object'),
	
	// Associations
	region: DS.belongsTo('region')	
});
