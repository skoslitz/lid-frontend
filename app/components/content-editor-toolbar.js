import Ember from 'ember';
const {$}= Ember
export default Ember.Component.extend({
	didInsertElement: function() {
		// remove trix-toolbar
		let trixToolbar = $('trix-toolbar');
		return trixToolbar.remove()

	},
	actions: {
		insertStationstitel() {
			let element = document.querySelector("trix-editor");
			element.editor.insertString("{{% stationstitel titel=\"__Titel eintragen__\" nummer=\"__Standortnummer__\" %}}")
		},
		undo() {
			let element = document.querySelector("trix-editor");
			element.editor.undo()
		},
		redo() {
			let element = document.querySelector("trix-editor");
			element.editor.redo()
		},
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
			window.open(image.src, '_blank');
		},
		sendImageShortcode(image) {
			let element = document.querySelector("trix-editor");
			element.editor.insertString(`{{% bild pfad="${image.filename}" clickable="true" titel="Bildtitel" quellenangaben="Quelle: "%}}`);
		},
		updateAction() {
			// send action to update model
			this.sendAction('updateAction');
		},
		deleteImage(image) {
			// build asset url from image properties
			let _previewFilepath = image.src.replace(image.filename, ("_vorschaubilder/" + image.filename))
			let previewFilepath = _previewFilepath.replace('assets', 'api/asset')
			let filepath = image.src.replace('assets', 'api/asset')

			let answer = confirm (`Die Datei ${image.filename} unwiederbringlich löschen?`)
			if (answer) {
				$.ajax({
				type: 'DELETE',
				url: previewFilepath
				});
				$.ajax({
					type: 'DELETE',
					url: filepath
				});

			this.sendAction('updateAction');
			}


		}
	}
});
