import Ember from 'ember';

export default Ember.Controller.extend({
	showPromptDialog : false,
	newModel: {},
	actions: {
	    openPromptDialog(){
	    	this.set('showPromptDialog', true) 
	    },
	    closePromptDialog(){
	      this.set('showPromptDialog', false)	      
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