import DS from 'ember-data';

export default DS.JSONAPISerializer.extend({
  	normalize(modelClass, resourceHash, prop) {
  		resourceHash.attributes.autor = `${resourceHash.attributes.metadata.autor}`
  		resourceHash.attributes.bildnachweise = `${resourceHash.attributes.metadata.bildnachweise}`
  		resourceHash.attributes.centroid = `${resourceHash.attributes.metadata.centroid}`
  		resourceHash.attributes.date = `${resourceHash.attributes.metadata.date}`
  		resourceHash.attributes.description = `${resourceHash.attributes.metadata.description}`
  		resourceHash.attributes.exkursion = `${resourceHash.attributes.metadata.exkursion}`
  		resourceHash.attributes.exkursionsende = `${resourceHash.attributes.metadata.exkursionsende}`
  		resourceHash.attributes.exkursionslaenge = `${resourceHash.attributes.metadata.exkursionslaenge}`
  		resourceHash.attributes.exkursionsstart = `${resourceHash.attributes.metadata.exkursionsstart}`
  		resourceHash.attributes.exkursionsstationen = `${resourceHash.attributes.metadata.exkursionsstationen}`
  		resourceHash.attributes.exkursionstypen = `${resourceHash.attributes.metadata.exkursionstypen}`
  		resourceHash.attributes.fremdexkursion = `${resourceHash.attributes.metadata.fremdexkursion}`
  		resourceHash.attributes.title = `${resourceHash.attributes.metadata.title}`
  		resourceHash.attributes["vg-wort-code"] = `${resourceHash.attributes.metadata.vg_wort_code}`
  		resourceHash.attributes.vorschaubild = `${resourceHash.attributes.metadata.vorschaubild}`
      resourceHash.attributes.zoomstufe = `${resourceHash.attributes.metadata.zoomstufe}`      
  		return this._super(...arguments)
  	}
});
