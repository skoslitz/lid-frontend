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
	bildnachweise: DS.attr('array'),
	literaturangaben: DS.attr('array'),
	rubriken: DS.attr('array'),
	video: DS.attr(''),
	content: DS.attr('string'),
	titelbild: DS.attr('string'),
	titelbildQuelle: DS.attr('string'),
	titelbildTitel: DS.attr('string'),
	vorschaubild: DS.attr('string'),	
	images: DS.attr(''),
	assetUrl: Ember.computed('hugoId', function() {
		let hugoId = this.get('hugoId');
		let bandnummer = this.get('hugoId').substr(0,2);
		let type = "themen";
		return `${'api/asset/img/'+ bandnummer + '/' + type + '/' + hugoId}`
	}),

	// Associations
	region: DS.belongsTo('region')

});