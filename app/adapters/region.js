import DS from 'ember-data';
import Ember from 'ember';

let { $ } = Ember;

export default DS.JSONAPIAdapter.extend({
	host: 'http://localhost:1313',
	namespace: 'api/page',
	pathForType: function(modelName) {
    	return "regionen";
  },
  createRecord: function(store, type, snapshot) {
      let url = `${this.host}/${this.namespace}/${snapshot.attr('path')}`;
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
      let url = `${this.host}/${this.namespace}/${snapshot.attr('path')}`;
      let data = {};
      let serializer = store.serializerFor(type.modelName);
      serializer.serializeIntoHash(data, type, snapshot);
      return $.ajax({
        type: 'PUT',
        url: url,
        data: JSON.stringify(data)
      });
  }
});
