import DS from 'ember-data';

export default DS.Transform.extend({
  deserialize: function(serialized) {
        console.log("---------------------------------------------");
        return serialized.split(',').map(function(item) {
          return jQuery.trim(item);
        });       
    },  
  serialize: function(deserialized) {
        return deserialized;
  } 

});
