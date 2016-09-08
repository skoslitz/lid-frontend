import DS from 'ember-data';
import Ember from 'ember';

export default DS.JSONAPIAdapter.extend({
	shouldReloadAll(store, snapshotsArray) {
    	return true;
  	},
  	shouldReloadRecord(store, snapshot) {
    	return true;
  	}
});
