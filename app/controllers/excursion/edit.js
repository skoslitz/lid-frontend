import Ember from 'ember';

export default Ember.Controller.extend({
	// TODO: make this work
	stickTrixToolbar: Ember.observer('distanceFromTop', function() {
		console.log('observer is called', this.get('distanceFromTop')); 
		// stick trix editor toolbar to top after scrolling
		/*
			$(window).scroll(function() {
	        var distanceFromTop = $(document).scrollTop();
	        if (distanceFromTop >= 740) {
	            $('#trix-toolbar-1').addClass('sticky-trix-toolbar');
	        } else {
	            $('#trix-toolbar-1').removeClass('sticky-trix-toolbar');
	        }
    	});*/
	}),		
	actions: {
		handleTrixAction: function(jqEvent) {			
			console.log(jqEvent)
		},
		updateExcursion: function() {
			
		},
		showRelatedRegion: function() {
			this.transitionToRoute('region.edit', `${regionName}.md`);
		}
	}
	
});
