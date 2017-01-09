var generators = require('yeoman-generator');
var util = require('util');
var path = require('path');
var gitconfig = require('git-config');
var slugify = require("underscore.string/slugify");
var camelize = require("underscore.string/camelize");


module.exports = generators.Base.extend({
  build: function () {
    console.log('build');
    this.mkdir('man')
    this.template('man.md', './man/'+this.cliName+'.md')
    this.template('_package.json', 'package.json')
    this.copy('travis.yml', '.travis.yml')
    this.copy('gitignore', '.gitignore')
    this.copy('jshintrc', '.jshintrc')
    this.copy('LICENSE', 'LICENSE')
    this.copy('CHANGELOG.md', 'CHANGELOG.md')
    this.template('README.md', 'README.md')
    this.mkdir('bin')
    this.template('cli', ('bin/cli'))
  },
  testFrameworks: function () {
    console.log('test');
    this.mkdir('test')
    this.mkdir('test/fixtures')
    this.copy('lib.js', 'index.js')
    this.template('test.js', 'test/index.js')
  },
  prompting: function () {
    var config = gitconfig.sync();
    var prompts = [
      {
        type: 'input',
        name: 'moduleName',
        message: 'node.js module name:',
        default: path.basename(process.cwd())
      },
        {
          type: 'input',
          name: 'moduleDesc',
          message: 'Module description'
        },
        {
          type: 'input',
          name: 'keywords',
          message: 'Module keywords',
          filter: function (value) {
            return [];
          }
        },
        {
          type: 'input',
          name: 'githubName',
          message: 'Your github username',
          default: (config.github && config.github.user) || ''
        },
        {
          type: 'input',
          name: 'cliName',
          message: 'Cli Name',
          default: config.moduleName
        },
        {
          type: 'input',
          name: 'author',
          message: 'Author name',
          default: ((config.user && config.user.name) || '') +
            (' <' + ((config.user && config.user.email) || '') + '>')
        }
      ];
    return this.prompt(prompts).then(function (props) {

      this.moduleName = slugify(props.moduleName)
      this.moduleVarName = camelize(props.moduleName)
      this.moduleDesc = props.moduleDesc
      this.keywords = props.keywords
      this.githubName = props.githubName
      this.author = props.author
      this.cliName = props.cliName
      this.copyrightName = props.author.replace(/<[^>]*?>/gm, '').trim()

      this.dequote = function (str) {
        return str.replace(/\"/gm, '\\"')
      }

      this.log('app name', props, this);

    }.bind(this));
  }
});
