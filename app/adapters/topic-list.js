import DS from 'ember-data';

export default DS.RESTAdapter.extend({
	host: 'http://localhost:1313',
	namespace: 'api/dir',
	pathForType: function(modelName) {
    	return "themen";
  	}
});
