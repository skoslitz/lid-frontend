import DS from 'ember-data';

export default DS.Transform.extend({
  serialize: function(serialized) {
        return (Ember.typeOf(serialized) == "array") ? serialized : [];
  },
  deserialize: function(deserialized) {
    var type = Ember.typeOf(deserialized);
    if (type == 'array') {
        return deserialized;
    } else if (type == 'string') {
        return deserialized.split(',').map(function(item) {
            return jQuery.trim(item);
        });
    } else {
        return [];
    }
  }

});
