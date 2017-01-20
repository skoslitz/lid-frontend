# lid-frontend

## the frontend of lid online editor

Only works with running lid-backend on predefined host: `localhost:1313`

### Development

You will need the following things properly installed on your computer.

* [Git](http://git-scm.com/)
* [Node.js](http://nodejs.org/) (with NPM)
* [Bower](http://bower.io/)
* [Ember CLI](http://ember-cli.com/)
* [PhantomJS](http://phantomjs.org/)

## Installation

* `git clone https://github.com/skoslitz/lid-frontend.git` this repository
* change into the new directory
* `npm install`
* `bower install`
* make sure lid-backend (content api) is running on `http://localhost:1313`

**NOTE**: if bower or npm installation procedures run into problems, try this
- `sudo bower update -a`
- fix permissions with `sudo -R 777 /path/node_modules` etc.

## Running / Development

* `ember s --proxy http://localhost:1313`
* Visit your app at [http://localhost:4200](http://localhost:4200).
