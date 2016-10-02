var expect = require('chai').assert
var cli = require('..')();

describe('<%= moduleName %>', function() {
  it('have a parse method', function(done) {
    assert.ok(cli.parse);
    done();
  });

  'use strict';
  const assert = require('chai').assert;
  var exec = require('child-process-promise').exec;

  var commands =[
    './bin/cli -h',
    './bin/cli a',
    'echo foo | ./bin/cli'
  ];

  it('executes the commands', function(done) {

    function execAndDone(command){
      return exec(command).catch(done);
    }

    commands = commands.map(execAndDone);
    Promise
      .all(commands)
      .then(function (result) {
          result.map(assert.ok);
          done();
      }).catch(done);
  }).timeout(5000);

});
