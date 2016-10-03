# generator-nodecli-awesome

[![npm version](https://badge.fury.io/js/generator-nodecli-awesome.svg)](https://badge.fury.io/js/generator-nodecli-awesome) [![Build Status](https://travis-ci.org/sebs/generator-nodecli-awesome.svg?branch=master)](https://travis-ci.org/sebs/generator-nodecli-awesome) [![npm](https://img.shields.io/npm/dt/generator-nodecli-awesome.svg?maxAge=2592000)]()



A node.js cli app generator for [Yeoman](http://yeoman.io).

* pure mocha tests
* no grunt
* no gulp
* creates man pages from markdown files

This is a improved version of [https://github.com/walidsa3d/generator-nodecli](https://github.com/walidsa3d/generator-nodecli)

### Install

To install from npm, run:

```
$ npm install -g generator-nodecli-awesome
```
### Usage
Initiate the generator:

```
$ yo nodecli-awesome
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
