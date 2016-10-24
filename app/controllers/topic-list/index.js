import Ember from 'ember';

export default Ember.Controller.extend({
	createTopicButton: true,
	createTopic: false,
	actions: {
		openCreateTopicDialog() {
			this.set('createTopic', true);
		},
		closeCreateTopicDialog() {
			this.set('createTopic', false);
		},
		createTopic() {
			console.log("Topic-list ctrl creates Topic");
		},
	}
});