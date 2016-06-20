import DS from 'ember-data';

export default DS.JSONSerializer.extend({
  normalizeResponse(store, primaryModelClass, payload, id, requestType) {
	    return {
	      data: {
	        id: payload.page.metadata.id,
	        type: primaryModelClass.modelName,
	        attributes: {
	          path: payload.page.path,
	          title: payload.page.metadata.title,
	          subtitle: payload.page.metadata.subtitle,
	          date: payload.page.metadata.date,
	          author: payload.page.metadata.autor,
	          categories: payload.page.metadata.rubriken,
	          description: payload.page.metadata.description,
	          vgWort: payload.page.metadata.vg_wort_code,
	          content: payload.page.content,
	          cover: payload.page.metadata.titelbild,
	          coverSrc: payload.page.metadata.titelbild_quelle,
	          coverName: payload.page.metadata.titelbild_titel,

	        }
	      }
	    };
  	}
});
