import DS from 'ember-data';

export default DS.JSONAPISerializer.extend({
    extractAttributes(modelClass, resourceHash){
            resourceHash.attributes.hugoId = resourceHash.attributes.metadata.id
            resourceHash.attributes.autor = resourceHash.attributes.metadata.autor
            resourceHash.attributes.title = resourceHash.attributes.metadata.title
            resourceHash.attributes.bildnachweise = resourceHash.attributes.metadata.bildnachweise
            resourceHash.attributes.literaturangaben = resourceHash.attributes.metadata.literaturangaben
            resourceHash.attributes.date = resourceHash.attributes.metadata.date
            resourceHash.attributes.description = resourceHash.attributes.metadata.description
            resourceHash.attributes.vgWortCode = resourceHash.attributes.metadata.vg_wort_code
            resourceHash.attributes.previewCover = resourceHash.attributes.metadata.vorschaubild
            resourceHash.attributes.previewCoverTitle = resourceHash.attributes.metadata.vorschaubild_titel
            resourceHash.attributes.cover = resourceHash.attributes.metadata.titelbild
            resourceHash.attributes.coverSrc = resourceHash.attributes.metadata.titelbild_quelle
            resourceHash.attributes.coverTitle = resourceHash.attributes.metadata.titelbild_titel
            resourceHash.attributes.centroid = resourceHash.attributes.metadata.centroid
            resourceHash.attributes.exkursion = resourceHash.attributes.metadata.exkursion
            resourceHash.attributes.exkursionsende = resourceHash.attributes.metadata.exkursionsende
            resourceHash.attributes.exkursionslaenge = resourceHash.attributes.metadata.exkursionslaenge
            resourceHash.attributes.exkursionsstart = resourceHash.attributes.metadata.exkursionsstart
            resourceHash.attributes.exkursionsstationen = resourceHash.attributes.metadata.exkursionsstationen
            resourceHash.attributes.exkursionstypen = resourceHash.attributes.metadata.exkursionstypen
            resourceHash.attributes.zoomstufe = resourceHash.attributes.metadata.zoomstufe
            resourceHash.attributes.actionbound = resourceHash.attributes.metadata.actionbound
            resourceHash.attributes.fremdexkursion = resourceHash.attributes.metadata.fremdexkursion
            resourceHash.attributes.exkursionsAnbieter = resourceHash.attributes.metadata.exkursions_anbieter
            resourceHash.attributes.exkursionsUrl = resourceHash.attributes.metadata.exkursions_url
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
                        "id": snapshot.attr("hugoId"),
                        "autor": snapshot.attr("autor"),
                        "title": snapshot.attr("title"),
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
                        "vg_wort_code": snapshot.attr("vgWortCode"),
                        "zoomstufe": snapshot.attr("zoomstufe"),
                        "actionbound": snapshot.attr("actionbound"),
                        "fremdexkursion": snapshot.attr("fremdexkursion"),
                        "exkursions_anbieter": snapshot.attr("exkursionsAnbieter"),
                        "exkursions_url": snapshot.attr("exkursionsUrl"),
                        "vorschaubild": snapshot.attr("previewCover"),
                        "vorschaubild_titel": snapshot.attr("previewCoverTitle"),
                        "titelbild": snapshot.attr("cover"),
                        "titelbild_quelle": snapshot.attr("coverSrc"),
                        "titelbild_titel": snapshot.attr("coverTitle"),
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
