import Ember from 'ember';
const {$}= Ember;

export default Ember.Component.extend({
	didInsertElement: function() {
		// remove trix-toolbar
		let trixToolbar = $('trix-toolbar');
		return trixToolbar.remove();

	},
	actions: {
		insertStationstitel() {
			let element = document.querySelector("trix-editor");
			element.editor.insertString("{{% stationstitel titel=\"__Titel eintragen__\" nummer=\"__Standortnummer__\" %}}\n");
		},
		undo() {
			let element = document.querySelector("trix-editor");
			element.editor.undo();
		},
		redo() {
			let element = document.querySelector("trix-editor");
			element.editor.redo();
		},
		insertClear() {
			let element = document.querySelector("trix-editor");
			element.editor.insertString("{{% clear %}}\n");
		},
		insertHyperlink() {
			let element = document.querySelector("trix-editor");
			element.editor.insertString("[Linktitel](http://lid-online.de)");
		},
		insertRelref() {
			let element = document.querySelector("trix-editor");
			element.editor.insertString("[Linktitel]({{< relref \"themen/78_B_159-urbane-natur.md\" >}})");
		},
		insertComment() {
			let element = document.querySelector("trix-editor");
			element.editor.insertString("{{% kommentar text=\"Hinweis: muss überarbeitet werden\" %}}\n");
		},
		insertDownload() {
			let element = document.querySelector("trix-editor");
			element.editor.insertString("{{% download pfad=\"mitte.csv\" titel=\"Mitte\" stand=\"31.12 2014\" lizenz=\"Lizenz\" format=\"Dateiformat\" size=\"Dateigrösse\" %}}\n");
		},
		insertTable() {
			let element = document.querySelector("trix-editor");
			element.editor.insertString("{{% tabellentitel text=\"Tabelle 1\" %}}\n\n| Element 1 | Element 2 | Element 3\n|----------------------------------------|-----------------------|-------------------|\n| Text Spalte 1 Reihe 1 | Text Spalte 2 Reihe 1 | Text Spalte 3 Reihe 1\n| Text Spalte 1 Reihe 2 | | Text Spalte 3 Reihe 2\n| Text Spalte 1 Reihe 3   | Text Spalte 2 Reihe 3  | Text Spalte 3 Reihe 3");
		},
		insertCompareImg() {
			let element = document.querySelector("trix-editor");
			element.editor.insertString("{{% bildervergleich pfad-1=\"img.jpg\" pfad-2=\"img.jpg\" label-1=\"label\" label-2=\"label\" quelle-1=\"Quelle\" quelle-2=\"Quelle\" %}}\n");
		},
		openImage(image) {
			window.open(image.src, '_blank');
		},
		sendImageShortcode(image) {
			let element = document.querySelector("trix-editor");
			element.editor.insertString(`{{% bild clickable="true" pfad="${image.filename}" titel="Bildtitel" quellenangaben="Quelle: " %}}\n`);
		},
		sendImageShortcodeFlowPreview(image) {
			let element = document.querySelector("trix-editor");
			element.editor.insertString(`{{% bild flow="preview" clickable="true" pfad="${image.filename}" titel="Bildtitel" quellenangaben="Quelle: " %}}\n`);
		},
		sendImageShortcodeFlowAround(image) {
			let element = document.querySelector("trix-editor");
			element.editor.insertString(`{{% bild flow="around" clickable="true" pfad="${image.filename}" titel="Bildtitel" quellenangaben="Quelle: " %}}\n`);
		},
		sendRegionImageShortcode(image) {
			let bandnummer = this.get('model.bandnummer');
			let element = document.querySelector("trix-editor");
			element.editor.insertString(`{{% bild_alt flow="preview" clickable="true" pfad="/${bandnummer}/${image.filename}" %}}\n`);
		},
		updateAction() {
			// send action to update model
			this.sendAction('updateAction');
		},
		deleteImage(image) {
			// build asset url from image properties
			let _previewFilepath = image.src.replace(image.filename, ("_vorschaubilder/" + image.filename));
			let previewFilepath = _previewFilepath.replace('assets', 'api/asset');
			let filepath = image.src.replace('assets', 'api/asset');

			let answer = confirm (`Die Datei ${image.filename} unwiederbringlich löschen?`);
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
