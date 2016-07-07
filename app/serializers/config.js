import JSONAPISerializer from 'ember-data/serializers/json-api';

export default JSONAPISerializer.extend({
	normalizeResponse(store, primaryModelClass, payload, id, requestType) {
	    return {
	      data: {
	        id: 'config',
	        type: primaryModelClass.modelName,
	        attributes: {
	          title: payload.title,
	          copyright: payload.params.copyright,
	          baseurl: payload.baseurl	         
	        }
	      }
	    };
  	}
});
