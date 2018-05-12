import Ember from 'ember';

export default Ember.Controller.extend({
	actions: {
		handleTrixAction: function(jqEvent) {
			console.log(jqEvent);
		}
	}
});
