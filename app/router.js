import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('directories');
  this.route('user');
  this.route('excursion');
  this.route('search');
});

export default Router;
