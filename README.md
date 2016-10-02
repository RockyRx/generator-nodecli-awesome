# generator-nodecli

A node.js cli app generator for [Yeoman](http://yeoman.io).

* pure mocha tests
* no grunt
* no gulp
* creates markdown files

### Install

To install from npm, run:

```
$ npm install -g generator-nodecli
```
### Usage
Initiate the generator:

```
$ yo nodecli
```
This generator will install the following files:

* package-json - initialized with the answers to all your questions.
* .travis.yml - set up so you can push and get [travis-ci](http://travis-ci.org)
   continous integration tests.
* .gitignore - ignore the usual stuff.
* LICENSE - MIT license initialized with your details.
* README.md - Initialized with your details and travis-ci badges.
* index.js - Initial library file
* test/index.js - unit test using mocha and chai
* man/manpage.1
