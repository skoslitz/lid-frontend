import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('region',  function() {
  	this.route('edit', {path: '/edit/:id'});
  	this.route('new');
  });
  this.route('topic-list', function() {
    this.route('index', {path: '/show/:id'});
  });
  this.route('topic',  function() {
    this.route('edit', {path: '/edit/:id'});
    this.route('new', {path: '/:id/new'});
  });
  this.route('excursion-list', function() {
    this.route('index', {path: '/show/:id'});
  });
  this.route('excursion',  function() {
  	this.route('edit', {path: '/edit/:id'});
  	this.route('new', {path: '/:id/new'});
  });
  this.route('search');
  this.route('config');
});

export default Router;
