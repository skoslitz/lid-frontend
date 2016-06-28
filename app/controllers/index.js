import Ember from 'ember';

export default Ember.Controller.extend({
	showPromptDialog : false,
	id: "",
	title: "",
	bandNumberChanged: Ember.observer('id', function() { 
    	console.log('observer is called', this.get('id')); 
  	}),	
	actions: {
	    openPromptDialog(){
	    	this.set('showPromptDialog', true) 
	    	this.set('id', 79) 
	    },
	    closePromptDialog(){
	      this.set('showPromptDialog', false)
	      console.log(this.get('id'))
	    },
	    save(){
	      let region = this.store.createRecord('region', this.get("newModel"))
	      this.set("newModel", {})
	      region.save().then(()=>{
	        this.transitionToRoute('region.edit', region)
	      })	      
	    }
	}
});