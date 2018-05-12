import Ember from 'ember';

export default Ember.Component.extend({
	showGuide: false,
	actions: {
		openGuide() {
			window.scrollTo(0, 0);
      this.set('showGuide', true);
		},
		closeGuide() {
			this.set('showGuide', false);
		}
	}
});
