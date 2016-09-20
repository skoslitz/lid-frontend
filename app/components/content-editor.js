import Ember from 'ember';
const {$}= Ember
export default Ember.Component.extend({
	didInsertElement: function() {
		// stick trix editor toolbar to top dynamically
		this.$(window).scroll(function() {
			let position = this.$(document).scrollTop();
			let metaEditorHeight = $('.meta-editor').height() + 160;		 	
			if (position >= metaEditorHeight) {
		        $('[class^=content-editor-toolbar]').addClass('sticky-trix-toolbar');
		    } else {
		        $('[class^=content-editor-toolbar]').removeClass('sticky-trix-toolbar');
		    }
		});
	},
	actions: {
		handleTrixAction() {
			let element = document.querySelector("trix-editor");
			// model.content = element.editor.getDocument().toString()
			// console.log(element.editor.getDocument().toString());			
		}						
	}
});
