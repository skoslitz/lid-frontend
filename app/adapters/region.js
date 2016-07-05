import DS from 'ember-data';
import Ember from 'ember';

let { $ } = Ember;

export default DS.RESTAdapter.extend({
	host: 'http://localhost:1313',
	namespace: 'api/page',
	pathForType: function(modelName) {
    	return "regionen";
  },
  createRecord: function(store, type, snapshot) {
      // build url dynamic with data.path -----| newRegion.path
      let url = `${this.host}/${this.namespace}/regionen/99-beispiel.md`;
      let data = {};
      let serializer = store.serializerFor(type.modelName);
      serializer.serializeIntoHash(data, type, snapshot);
      return $.ajax({
      type: 'POST',
      url: url,
      data: JSON.stringify(data)
      });
  }
});
