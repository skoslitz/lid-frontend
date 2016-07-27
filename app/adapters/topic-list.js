import DS from 'ember-data';

export default DS.JSONAPIAdapter.extend({
	host: 'http://localhost:1313',
	namespace: 'api/dir',
	pathForType: function(modelName) {
    	return "themen";
  	},
  	urlForQuery: function(query, modelName) {
  		let id = query.id;
  		// remove query, otherwise url contains query param
  		delete query.id;
  		return `${this.host}/api/regionen/${id}/themen`
  	}

});
