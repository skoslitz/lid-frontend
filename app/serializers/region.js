import DS from 'ember-data';

export default DS.JSONAPISerializer.extend({
  	normalize(modelClass, resourceHash, prop) {
  		resourceHash.attributes.bandnummer = `${resourceHash.attributes.metadata.bandnummer}`
  		resourceHash.attributes.title = `${resourceHash.attributes.metadata.title}`
  		resourceHash.attributes.subtitle = `${resourceHash.attributes.metadata.untertitel}`
  		resourceHash.attributes.description = `${resourceHash.attributes.metadata.kurzbeschreibung}`
  		resourceHash.attributes.date = `${resourceHash.attributes.metadata.date}`
  		resourceHash.attributes.dateOfPublication = `${resourceHash.attributes.metadata.erscheinungsjahr}`
  		resourceHash.attributes.editor = `${resourceHash.attributes.metadata.herausgeber}`
  		resourceHash.attributes.editorInstitut = `${resourceHash.attributes.metadata.herausgeberinstitut}`
  		resourceHash.attributes.isbn = `${resourceHash.attributes.metadata.isbn}`
  		resourceHash.attributes.location = `${resourceHash.attributes.metadata.ort}`
  		resourceHash.attributes.editionTitle = `${resourceHash.attributes.metadata.reihentitel}`
  		resourceHash.attributes.pagination = `${resourceHash.attributes.metadata.seitenzahl}`
  		resourceHash.attributes.extent = `${resourceHash.attributes.metadata.umfang}`
  		resourceHash.attributes.publisher = `${resourceHash.attributes.metadata.verlag}`
  		resourceHash.attributes.bundesland = `${resourceHash.attributes.metadata.bundesland}`
  		return this._super(...arguments)
  	}
/*
  	normalizeResponse(store, primaryModelClass, payload, id, requestType) {
	    return {
	      data: {
	        id: payload.page.id,
	        type: primaryModelClass.modelName,
	        attributes: {
	          path: payload.page.path,	          
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
	}*/
});
