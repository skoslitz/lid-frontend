import Ember from 'ember';
const {$}= Ember
export default Ember.Component.extend({
	// TODO
	// make this working with custom data-actions
	extendToolbar() {
			let toolbar = $('[class^=button_groups]');
			return toolbar.append(`<span class="button_group history_tools"><button type="button" class="code" data-action="shortcode" data-key="z" title="Shortcode">Shortcode</button><button type="button" class="code" data-action="redo" data-key="shift+z" title="Shortcode">Shortcode</button></span>`);				
	},
	// stick trix editor toolbar to top dynamically
	didInsertElement: function() {
		this.$(window).scroll(function() {
			let position = this.$(document).scrollTop();
			let metaEditorHeight = $('.meta-editor').height() + 160;		 	
			if (position >= metaEditorHeight) {
		        $('[id^=trix-toolbar]').addClass('sticky-trix-toolbar');
		    } else {
		        $('[id^=trix-toolbar]').removeClass('sticky-trix-toolbar');
		    }
		});
		this.extendToolbar();
	},
	actions: {
		handleTrixAction() {
			let element = document.querySelector("trix-editor");
			console.log(element.editor.getDocument().toString());			
		},
		insertShortcode() {
			let element = document.querySelector("trix-editor");
			element.editor.insertString("Hello")
		}				
	}
});
