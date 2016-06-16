import DS from 'ember-data';

export default DS.JSONSerializer.extend({
  normalizeResponse(store, primaryModelClass, payload, id, requestType) {
	    return {
	      data: {
	        id: payload.page.metadata.bandnummer,
	        type: primaryModelClass.modelName,
	        attributes: {
	          path: payload.page.path,
	          title: payload.page.metadata.title,
	          date: payload.page.metadata.date,
	          description: payload.page.metadata.kurzbeschreibung,
	          bundesland: payload.page.metadata.bundesland,
	          content: payload.page.content
	        }
	      }
	    };
  	}
});