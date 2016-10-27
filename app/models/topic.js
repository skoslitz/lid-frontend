import DS from 'ember-data';

export default DS.Model.extend({
	// Attributes
	hugoId: DS.attr('string'),	
	path: DS.attr('string'),	
	title: DS.attr('string'),
	subtitle: DS.attr('string'),
	date: DS.attr('string'),
	autor: DS.attr('string'),
	description: DS.attr('string'),
	vgWortCode: DS.attr('string'),
	bildnachweise: DS.attr('string'),
	literaturangaben: DS.attr(),
	content: DS.attr('string'),
	titelbild: DS.attr('string'),
	titelbildQuelle: DS.attr('string'),
	titelbildTitel: DS.attr('string'),
	vorschaubild: DS.attr('string'),
	rubriken: DS.attr('string'),
	video: DS.attr(''),
	images: DS.attr(''),
	
	// Associations
	region: DS.belongsTo('region')
	
});