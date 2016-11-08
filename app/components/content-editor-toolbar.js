import Ember from 'ember';
const {$}= Ember
export default Ember.Component.extend({
	didInsertElement: function() {
		// remove trix-toolbar
		let trixToolbar = $('trix-toolbar');
		return trixToolbar.remove()

	},
	actions: {
		insertQuote() {
			let element = document.querySelector("trix-editor");
			element.editor.insertString("„ZITAT“")
			// TODO: Quotation mark for selected text
		},
		insertBold() {
			let element = document.querySelector("trix-editor");
			element.editor.insertString("**Fett**")
			// TODO: Bold for selected text
		},
		insertShortcode() {
			let element = document.querySelector("trix-editor");
			element.editor.insertString("Hello")
		},
		openImage(image) {
			console.log(image);
		},
		sendImageShortcode(image) {
			let element = document.querySelector("trix-editor");
			element.editor.insertString(image.filename)
		},
		uploadImage() {
			console.log("comp get uploadImage action")
			this.sendAction('uploadImageAction');
		}
	}
});
