import DS from 'ember-data';

export default DS.JSONAPISerializer.extend({
    extractAttributes(modelClass, resourceHash){      
            resourceHash.attributes.autor = resourceHash.attributes.metadata.autor
            resourceHash.attributes.bildnachweise = resourceHash.attributes.metadata.bildnachweise
            resourceHash.attributes.literaturangaben = resourceHash.attributes.metadata.literaturangaben
            resourceHash.attributes.centroid = resourceHash.attributes.metadata.centroid
            resourceHash.attributes.date = resourceHash.attributes.metadata.date
            resourceHash.attributes.description = resourceHash.attributes.metadata.description
            resourceHash.attributes.exkursion = resourceHash.attributes.metadata.exkursion
            resourceHash.attributes.exkursionsende = resourceHash.attributes.metadata.exkursionsende
            resourceHash.attributes.exkursionslaenge = resourceHash.attributes.metadata.exkursionslaenge
            resourceHash.attributes.exkursionsstart = resourceHash.attributes.metadata.exkursionsstart
            resourceHash.attributes.exkursionsstationen = resourceHash.attributes.metadata.exkursionsstationen
            resourceHash.attributes.exkursionstypen = resourceHash.attributes.metadata.exkursionstypen
            resourceHash.attributes.fremdexkursion = resourceHash.attributes.metadata.fremdexkursion
            resourceHash.attributes.title = resourceHash.attributes.metadata.title
            resourceHash.attributes.vgWortCode = resourceHash.attributes.metadata.vg_wort_code
            resourceHash.attributes.vorschaubild = resourceHash.attributes.metadata.vorschaubild
            resourceHash.attributes.zoomstufe = resourceHash.attributes.metadata.zoomstufe
            return resourceHash.attributes;
    },
    serializeIntoHash(hash, typeClass, snapshot) {
        hash["page"] = this.serialize(snapshot);
    },
    serialize(snapshot) {
      let serializedData = {
            "attributes": {
                  "path": snapshot.attr("path"),
                  "metadata": {
                        "autor": snapshot.attr("autor"),
                        "bildnachweise": snapshot.attr("bildnachweise"),
                        "literaturangaben": snapshot.attr("literaturangaben"),
                        "centroid": snapshot.attr("centroid"),
                        "date": snapshot.attr("date"),
                        "description": snapshot.attr("description"),
                        "exkursion": snapshot.attr("exkursion"),
                        "exkursionsende": snapshot.attr("exkursionsende"),
                        "exkursionslaenge": snapshot.attr("exkursionslaenge"),
                        "exkursionsstart": snapshot.attr("exkursionsstart"),
                        "exkursionsstationen": snapshot.attr("exkursionsstationen"),
                        "exkursionstypen": snapshot.attr("exkursionstypen"),
                        "fremdexkursion": snapshot.attr("fremdexkursion"),
                        "vg_wort_code": snapshot.attr("vgWortCode"),
                        "vorschaubild": snapshot.attr("vorschaubild"),
                        "zoomstufe": snapshot.attr("zoomstufe"),
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
