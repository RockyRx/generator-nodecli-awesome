var expect = require('chai').expect
var <%= moduleVarName %> = require('..')

describe('<%= moduleName %>', function() {
  it('should say hello', function(done) {
    expect(<%= moduleVarName %>()).to.equal('Hello, world');
    done();
  });
});
