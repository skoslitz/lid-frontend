import DS from 'ember-data';

export default DS.JSONAPIAdapter.extend({
	host: 'http://localhost:1313',
	namespace: 'api/page',
	pathForType: function(modelName) {
    	return "suche";
  	}
});
