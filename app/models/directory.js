import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr('string'),
  path: DS.attr('string'),
  isDir: DS.attr('bool'),
  size: DS.attr('number'),
  modTime: DS.attr('string')
});
