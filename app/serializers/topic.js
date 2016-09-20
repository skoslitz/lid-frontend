import DS from 'ember-data';

export default DS.JSONAPISerializer.extend({
  	normalize(modelClass, resourceHash, prop) {
  		resourceHash.attributes.autor = `${resourceHash.attributes.metadata.autor}`
  		resourceHash.attributes.bildnachweise = `${resourceHash.attributes.metadata.bildnachweise}`
  		resourceHash.attributes.date = `${resourceHash.attributes.metadata.date}`
  		resourceHash.attributes.description = `${resourceHash.attributes.metadata.description}`
  		resourceHash.attributes.rubriken = `${resourceHash.attributes.metadata.rubriken}`
  		resourceHash.attributes.subtitle = `${resourceHash.attributes.metadata.subtitle}`
  		resourceHash.attributes.title = `${resourceHash.attributes.metadata.title}`
  		resourceHash.attributes["vg-wort-code"] = `${resourceHash.attributes.metadata.vg_wort_code}`
  		resourceHash.attributes.video = `${resourceHash.attributes.metadata.video}`
  		resourceHash.attributes.vorschaubild = `${resourceHash.attributes.metadata.vorschaubild}`
      resourceHash.attributes.images = `${resourceHash.relationships.bilder}`
  		return this._super(...arguments)
  	}
});
