import DS from 'ember-data';

export default DS.RESTAdapter.extend({
	host: 'http://localhost:1313',
	namespace: 'api',
	pathForType: function(modelName) {
    	return "config";
  	}
});
