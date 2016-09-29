import DS from 'ember-data';

export default DS.JSONAPISerializer.extend({
  	normalize(modelClass, resourceHash, prop) {
  		resourceHash.attributes.bandnummer = `${resourceHash.attributes.metadata.bandnummer}`
  		resourceHash.attributes.title = `${resourceHash.attributes.metadata.title}`
  		resourceHash.attributes.subtitle = `${resourceHash.attributes.metadata.untertitel}`
  		resourceHash.attributes.description = `${resourceHash.attributes.metadata.kurzbeschreibung}`
  		resourceHash.attributes.date = `${resourceHash.attributes.metadata.date}`
  		resourceHash.attributes["date-of-publication"] = `${resourceHash.attributes.metadata.erscheinungsjahr}`
  		resourceHash.attributes.editor = `${resourceHash.attributes.metadata.herausgeber}`
  		resourceHash.attributes["editor-institut"] = `${resourceHash.attributes.metadata.herausgeberinstitut}`
  		resourceHash.attributes.isbn = `${resourceHash.attributes.metadata.isbn}`
  		resourceHash.attributes.location = `${resourceHash.attributes.metadata.ort}`
  		resourceHash.attributes["edition-title"] = `${resourceHash.attributes.metadata.reihentitel}`
  		resourceHash.attributes.pagination = `${resourceHash.attributes.metadata.seitenzahl}`
  		resourceHash.attributes.extent = `${resourceHash.attributes.metadata.umfang}`
  		resourceHash.attributes.publisher = `${resourceHash.attributes.metadata.verlag}`
  		resourceHash.attributes.bundesland = `${resourceHash.attributes.metadata.bundesland}`
  		return this._super(...arguments)
  	},
  	serializeIntoHash(hash, typeClass, snapshot) {
		hash["page"] = this.serialize(snapshot);
	},
	serialize(snapshot) {
		let serializedData = {
			"attributes": {
				"path": snapshot.attr("path"),
				"metadata": {
					"title": snapshot.attr("title"),
					"bandnummer": snapshot.attr("bandnummer"),
					"kurzbeschreibung": snapshot.attr("description")
				},
				"content": snapshot.attr("content")
			}			
		};

		if (snapshot.id) {
			serializedData.id = snapshot.id;
		};
			
		return serializedData;
	}
});
