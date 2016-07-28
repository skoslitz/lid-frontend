import Ember from 'ember';

	// stick trix editor toolbar to top after scrolling
	$(window).scroll(function() {
	    var distanceFromTop = $(document).scrollTop();
	    if (distanceFromTop >= 689) {
	        $('#trix-toolbar-1').addClass('sticky-trix-toolbar');
	    } else {
	        $('#trix-toolbar-1').removeClass('sticky-trix-toolbar');
	    }
	});

export default Ember.Controller.extend({
		
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
