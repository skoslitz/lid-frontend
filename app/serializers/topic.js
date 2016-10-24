import DS from 'ember-data';

export default DS.JSONAPISerializer.extend({
  	extractAttributes(modelClass, resourceHash){      
            resourceHash.attributes.autor = resourceHash.attributes.metadata.autor
            resourceHash.attributes.bildnachweise = resourceHash.attributes.metadata.bildnachweise
            resourceHash.attributes.date = resourceHash.attributes.metadata.date
            resourceHash.attributes.description = resourceHash.attributes.metadata.description
              resourceHash.attributes.literaturangaben = resourceHash.attributes.metadata.literaturangaben
            resourceHash.attributes.rubriken = resourceHash.attributes.metadata.rubriken
            resourceHash.attributes.subtitle = resourceHash.attributes.metadata.subtitle
           
            resourceHash.attributes.title = resourceHash.attributes.metadata.title
            resourceHash.attributes.vgWortCode = resourceHash.attributes.metadata.vg_wort_code
            resourceHash.attributes.vorschaubild = resourceHash.attributes.metadata.vorschaubild
            resourceHash.attributes.titelbild = resourceHash.attributes.metadata.titelbild
            resourceHash.attributes.titelbildQuelle = resourceHash.attributes.metadata.titelbild_quelle
            resourceHash.attributes.titelbildTitel = resourceHash.attributes.metadata.titelbild_titel
            resourceHash.attributes.video = resourceHash.attributes.metadata.video
            resourceHash.attributes.vorschaubild = resourceHash.attributes.metadata.vorschaubild    
           
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
                        "date": snapshot.attr("date"),
                        "description": snapshot.attr("description"),
                        "literaturangaben": snapshot.attr("literaturangaben"),
                        "subtitle": snapshot.attr("subtitle"),
                        "title": snapshot.attr("title"),                        
                        "vg_wort_code": snapshot.attr("vgWortCode"),
                        "vorschaubild": snapshot.attr("vorschaubild"),
                        "titelbild": snapshot.attr("titelbild"),
                        "titelbild_quelle": snapshot.attr("titelbildQuelle"),
                        "titelbild_titel": snapshot.attr("titelbildTitel"),
                        "video": snapshot.attr("video"),
                        "vorschaubild": snapshot.attr("vorschaubild"),
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
