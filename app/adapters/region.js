import DS from 'ember-data';

export default DS.RESTAdapter.extend({
	host: 'http://localhost:1313',
	namespace: 'api/page',
	pathForType: function(modelName) {
    	return "regionen";
  	},
  	createRecord: function(store, type, snapshot) {
    var data = this.serialize(snapshot, { includeId: true });
    var url = 'http://localhost:1313/api/page/regionen';

    return new Ember.RSVP.Promise(function(resolve, reject) {
      Ember.$.ajax({
        type: 'POST',
        url: url,
        dataType: 'json',
        data: data
      }).then(function(data) {
        Ember.run(null, resolve, data);
      }, function(jqXHR) {
        jqXHR.then = null; // tame jQuery's ill mannered promises
        Ember.run(null, reject, jqXHR);
      });
    });
  }
});
