import Ember from 'ember';
const {$}= Ember
export default Ember.Component.extend({
	didInsertElement: function() {
		// remove trix-toolbar
		let trixToolbar = $('trix-toolbar');
		return trixToolbar.remove()
		
	},
	actions: {
		insertShortcode() {
			let element = document.querySelector("trix-editor");
			element.editor.insertString("Hello")
		}				
	}
});
