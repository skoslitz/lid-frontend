import EmberUploader from 'ember-uploader';

export default EmberUploader.FileField.extend({
  filesDidChange: function(files) {
    const uploader = EmberUploader.Uploader.create({
      url: this.get('url')
    });

    if (!Ember.isEmpty(files)) {
      // this second argument is optional and can to be sent as extra data with the upload
      // uploader.upload(files[0], { whateverObject });
      uploader.upload(files[0]);
    }

    // Handle progress changes
    uploader.on('progress', e => {
      // after upload send model update action
      if (e.percent == 100) {
        let filename = files[0].name;
        this.sendAction('updateAction', filename);
      }
    });
  }
});