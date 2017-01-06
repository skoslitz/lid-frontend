import DS from 'ember-data';

export default DS.Model.extend({
	// Attributes
	hugoId: DS.attr('string'),
	path: DS.attr('string'),
	title: DS.attr('string'),
	autor: DS.attr('string'),
	date: DS.attr('string'),
	description: DS.attr('string'),
	vgWortCode: DS.attr('string'),
	bildnachweise: DS.attr(),
	literaturangaben: DS.attr(),
	content: DS.attr('string'),
	cover: DS.attr('string'),
	coverSrc: DS.attr('string'),
	coverTitle: DS.attr('string'),
	previewCover: DS.attr('string'),
	previewCoverTitle: DS.attr('string'),
	images: DS.attr(),
	staticUrl: Ember.computed('hugoId', function() {
		let hugoId = this.get('hugoId');
		let bandnummer = this.get('hugoId').substr(0,2);
		let type = "exkursionen";
		return `${'assets/img/'+ bandnummer + '/' + type + '/' + hugoId}`
	}),
	assetUrl: Ember.computed('hugoId', function() {
		let hugoId = this.get('hugoId');
		let bandnummer = this.get('hugoId').substr(0,2);
		let type = "exkursionen";
		return `${'api/asset/img/'+ bandnummer + '/' + type + '/' + hugoId}`
	}),
	exkursion: DS.attr(),
	centroid: DS.attr(),
	centroidLat: Ember.computed('centroid', function() {
    	return `${this.get('centroid')[0]}`;
 	 }),
	centroidLon: Ember.computed('centroid', function() {
	  	return `${this.get('centroid')[1]}`;
	}),
	zoomstufe: DS.attr('number'),
	exkursionsstart: DS.attr('string'),
	exkursionsende: DS.attr('string'),
	exkursionslaenge: DS.attr('number'),
	exkursionsstationen: DS.attr('number'),
	exkursionstypen: DS.attr(),
	actionbound: DS.attr('boolean'),
	fremdexkursion: DS.attr('boolean'),
	exkursionsAnbieter: DS.attr('string'),
	exkursionsUrl: DS.attr('string'),

	// Associations
	region: DS.belongsTo('region')
});
