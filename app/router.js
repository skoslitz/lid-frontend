import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('region',  function() {
  	this.route('edit', {path: '/edit/:fileName'});
  	this.route('new');
  });
  this.route('topic-list', {path: '/topic-list/:id'}, function() {});
  this.route('topic',  function() {
    this.route('edit', {path: '/edit/:fileName'});
    this.route('new', {path: '/:id/new'});
  });
  this.route('excursion-list', {path: '/excursion-list/:id'}, function() {});
  this.route('excursion',  function() {
  	this.route('edit', {path: '/edit/:fileName'});
  	this.route('new', {path: '/:id/new'});
  });
  this.route('search');
  this.route('config');
});

export default Router;
