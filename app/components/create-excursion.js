import Ember from 'ember';

export default Ember.Component.extend({
	articleNumber: null,
	articleName: "",
	externalExcursion: false,
	actionBound: false,
	actions: {
			umlautCheck() {
				let value = this.get('articleName') || this.set('articleName', "")
				console.log(value)
				switch (event.keyCode) {
					// ä Umlaut to ae
					case 222:
						this.set('articleName', `${value}ae`);
						event.returnValue = false;
						break;
					// ö Umlaut to oe
					case 186:
						this.set('articleName', `${value}oe`);
						event.returnValue = false;
						break;
					// ü Umlaut to ue
					case 219:
						this.set('articleName', `${value}ue`);
						event.returnValue = false;
						break;
					default:
						console.log('ok--');
				}
			},
			closeCreateExcursionDialog() {
    		this.sendAction('closeCreateExcursionDialogAction');
	    },
	    createExcursionAction() {
			let excursionMeta = {
				"articleNumber": parseInt(this.get('articleNumber')),
				"articleName": this.get('articleName'),
				"externalExcursion": this.get('externalExcursion'),
				"actionBound": this.get('actionBound')
			};
			this.sendAction('createExcursionConfirmedAction', excursionMeta);
	    },
	}
});
