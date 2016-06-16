import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('region',  function() {
  	this.route('show', {path: '/show/:name'});
  	this.route('new');
  });
  this.route('topic-list', function() {});
  this.route('topic',  function() {
    this.route('show', {path: '/show/:name'});
    this.route('new');
  });
  this.route('excursion-list', function() {});
  this.route('excursion',  function() {
  	this.route('show', {path: '/show/:name'});
  	this.route('new');
  });
  this.route('search');  
});

export default Router;
