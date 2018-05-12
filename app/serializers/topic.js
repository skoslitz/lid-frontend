import DS from 'ember-data';

export default DS.JSONAPISerializer.extend({
  	extractAttributes(modelClass, resourceHash){
            resourceHash.attributes.hugoId = resourceHash.attributes.metadata.id;
            resourceHash.attributes.autor = resourceHash.attributes.metadata.autor;
            resourceHash.attributes.title = resourceHash.attributes.metadata.title;
            resourceHash.attributes.bildnachweise = resourceHash.attributes.metadata.bildnachweise;
            resourceHash.attributes.literaturangaben = resourceHash.attributes.metadata.literaturangaben;
            resourceHash.attributes.date = resourceHash.attributes.metadata.date;
            resourceHash.attributes.description = resourceHash.attributes.metadata.description;
            resourceHash.attributes.rubriken = resourceHash.attributes.metadata.rubriken;
            resourceHash.attributes.subtitle = resourceHash.attributes.metadata.subtitle;
            resourceHash.attributes.vgWortCode = resourceHash.attributes.metadata.vg_wort_code;
            resourceHash.attributes.previewCover = resourceHash.attributes.metadata.vorschaubild;
            resourceHash.attributes.cover = resourceHash.attributes.metadata.titelbild;
            resourceHash.attributes.coverSrc = resourceHash.attributes.metadata.titelbild_quelle;
            resourceHash.attributes.coverTitle = resourceHash.attributes.metadata.titelbild_titel;
            resourceHash.attributes.video = resourceHash.attributes.metadata.video;
            return resourceHash.attributes;
    },
    serializeIntoHash(hash, typeClass, snapshot) {
        hash.page = this.serialize(snapshot);
    },
    serialize(snapshot) {
      let serializedData = {
            "attributes": {
                  "path": snapshot.attr("path"),
                  "metadata": {
                        "id": snapshot.attr('hugoId'),
                        "autor": snapshot.attr("autor"),
                        "title": snapshot.attr("title"),
                        "bildnachweise": snapshot.attr("bildnachweise"),
                        "date": snapshot.attr("date"),
                        "description": snapshot.attr("description"),
                        "literaturangaben": snapshot.attr("literaturangaben"),
                        "subtitle": snapshot.attr("subtitle"),
                        "rubriken": snapshot.attr("rubriken"),
                        "vg_wort_code": snapshot.attr("vgWortCode"),
                        "vorschaubild": snapshot.attr("previewCover"),
                        "titelbild": snapshot.attr("cover"),
                        "titelbild_quelle": snapshot.attr("coverSrc"),
                        "titelbild_titel": snapshot.attr("coverTitle"),
                        "video": snapshot.attr("video"),
                  },
                  "content": snapshot.attr("content")
            }
      };

      if (snapshot.id) {
            serializedData.id = snapshot.id;
      }

      return serializedData;
    }


});
