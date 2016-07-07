import DS from 'ember-data';

export default DS.JSONSerializer.extend({
  	normalizeResponse(store, primaryModelClass, payload, id, requestType) {
	    return {
	      data: {
	        id: payload.page.id,
	        type: primaryModelClass.modelName,
	        attributes: {
	          path: payload.page.path,
	          filename: payload.page.filename,
	          bandnummer: payload.page.metadata.bandnummer,
	          title: payload.page.metadata.title,
	          subtitle: payload.page.metadata.untertitel,
	          description: payload.page.metadata.kurzbeschreibung,
	          date: payload.page.metadata.date,
	          dateOfPublication: payload.page.metadata.erscheinungsjahr,
	          editor: payload.page.metadata.herausgeber,
	          editorInstitut: payload.page.metadata.herausgeberinstitut,
	          isbn: payload.page.metadata.isbn,
	          location: payload.page.metadata.ort,	  
	          editionTitle: payload.page.metadata.reihentitel,
	          pagination: payload.page.metadata.seitenzahl,
	          extent: payload.page.metadata.umfang,        
	          publisher: payload.page.metadata.verlag,	          
	          bundesland: payload.page.metadata.bundesland,	          
	          content: payload.page.content,
	          assets: payload.page.links.assets
	        }
	      }
	    };
  	},
  	serializeIntoHash(hash, typeClass, snapshot) {
		hash["page"] = this.serialize(snapshot);
	},
	serialize(snapshot) {
		let serializedData = {
			"path": snapshot.attr("path"),
			"content": snapshot.attr("content"),
			"metadata": {
				"title": snapshot.attr("title"),
				"bandnummer": snapshot.attr("bandnummer")
			}
		};

		if (snapshot.id) {
			serializedData.id = snapshot.id;
		};
			
		return serializedData;
	}
});
