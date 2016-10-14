module.exports = function () {
  var program;
  return {
    parse: function(program) {
      program = program;
      // a max lenght check makes sure, we are no involuntarily helper in a DOSs
      function checkLenght(program) {
        if(program.args[0].length > 4096) {
          throw Error('input maxlength > 4096');
        }
        return program;
      }
      // since stdin is async anyway, I use a promise to make things simpler
      var p = new Promise(function(resolve, reject) {
        // if we have noral parameters, ignore stdin
        if (program.args.length < 1) {
          var stdInData;
          process.stdin.setEncoding('utf8');

          process.stdin.on('readable', () => {
            var chunk = process.stdin.read();
            if (chunk !== null) {
              program.args[0] = chunk;
              resolve(program)
            } else if (!program.args[0]) {
              program.help();
              process.exit(1);
            }
          });
          process.stdin.on('end', () => {
            if (!program.args[0]) {
              reject('no arguments');
            }
          });
        } else {
          resolve(program)
        }
      });
      return p.then(checkLenght);
    }
  }
};
