import DS from 'ember-data';
import Ember from 'ember';

let { $ } = Ember;

export default DS.JSONAPIAdapter.extend({
	//host: 'http://localhost:1313',
	namespace: 'api/page',
	pathForType: function(modelName) {
    	return "exkursionen";
  	},
  	createRecord: function(store, type, snapshot) {
      let url = `/${this.namespace}/${snapshot.attr('path')}`;
      let data = {};
      let serializer = store.serializerFor(type.modelName);
      serializer.serializeIntoHash(data, type, snapshot);
      return $.ajax({
        type: 'POST',
        url: url,
        data: JSON.stringify(data)
      });
  	},
  	updateRecord: function(store, type, snapshot) {
		let url = `/${this.namespace}/${snapshot.attr('path')}`;
		let data = {};
		let serializer = store.serializerFor(type.modelName);
		serializer.serializeIntoHash(data, type, snapshot);
		return $.ajax({
			type: 'OPTIONS',
			url: url,
			data: JSON.stringify(data)
		});
  	},
  	deleteRecord(store, type, snapshot) {
      let url = `/${this.namespace}/${snapshot.attr('path')}`;
      return $.ajax({
        type: 'DELETE',
        url: url
      });
  	}
});
