import DS from 'ember-data';

export default DS.JSONSerializer.extend({
    normalizeResponse(store, primaryModelClass, payload, id, requestType) {
	    return {
	      data: {
	        id: payload.page.id,
	        type: primaryModelClass.modelName,
	        attributes: {
	          path: payload.page.path,	          
	          title: payload.page.metadata.title,
	          date: payload.page.metadata.date,
	          description: payload.page.metadata.description,
	          vgWort: payload.page.metadata.vg_wort_code,
	          content: payload.page.content,
	          assets: payload.page.links.assets
	        }
	      }
	    };
  	},
    keyForRelationship(key, relationship) {
		if (relationship === 'belongsTo') {
			return `edition`;
		}
  }
});
