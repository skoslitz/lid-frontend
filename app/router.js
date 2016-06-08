import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('excursion-list', function() {});
  this.route('excursion',  function() {
  	this.route('show', {path: '/show/:name'});
  	this.route('new');
  });
  this.route('search');  
});

export default Router;
