import Ember from 'ember';

export default Ember.Component.extend({
	showGuide: false,
	actions: {
		openGuide() {
			this.set('showGuide', true)
		},
		closeGuide() {
			this.set('showGuide', false)
		}
	}
});
