import Ember from 'ember';

export default Ember.Controller.extend({
	newModel: {},
	actions: {
	    save(){
	      let region = this.store.createRecord('region', this.get("newModel"))
	      this.set("newModel", {})
	      region.save().then(()=>{
	        this.transitionToRoute('region.edit', region)
	      })	      
	    }
	}
});