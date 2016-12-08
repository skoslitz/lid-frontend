import DS from 'ember-data';

export default DS.JSONAPISerializer.extend({
	normalize(modelClass, resourceHash, prop) {
		resourceHash.attributes.hugoId = `${resourceHash.attributes.metadata.id}`
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
				"id": snapshot.attr('hugoId'),
				"bandnummer": snapshot.attr("bandnummer"),
				"title": snapshot.attr("title"),
				"untertitel": snapshot.attr("subtitle"),
				"kurzbeschreibung": snapshot.attr("description"),
				"date": snapshot.attr("date"),
				"erscheinungsjahr": snapshot.attr("dateOfPublication"),
				"herausgeber": snapshot.attr("editor"),
				"herausgeberinstitut": snapshot.attr("editorInstitut"),
				"isbn": snapshot.attr("isbn"),
				"ort": snapshot.attr("location"),
				"reihentitel": snapshot.attr("editionTitle"),
				"seitenzahl": snapshot.attr("pagination"),
				"umfang": snapshot.attr("extent"),
				"verlag": snapshot.attr("publisher"),
				"bundesland": snapshot.attr("bundesland"),
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
