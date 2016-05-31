import JSONAPISerializer from 'ember-data/serializers/json-api';

export default JSONAPISerializer.extend({
	normalizeResponse(store, primaryModelClass, payload, id, requestType) {
	    return {
	      data: {
	        id: payload.page.path,
	        type: primaryModelClass.modelName,
	        attributes: {
	          path: payload.page.path,
	          title: payload.page.metadata.title,
	          date: payload.page.metadata.date,
	          content: payload.page.content
	        }
	      }
	    };
  	}
});
