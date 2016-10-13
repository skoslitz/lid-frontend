import DS from 'ember-data';

export default DS.JSONAPISerializer.extend({
	normalizeQueryResponse(store, primaryModelClass, payload, id, requestType) {
	    if (payload.data == null) {
	    	return {data: []};
	    } else {
	        return this._super(...arguments);
	    }
  	}
});
