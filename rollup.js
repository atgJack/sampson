var rollup =  require('rollup');
var babel  = require('rollup-plugin-babel');

rollup.rollup({
  entry: 'lib/main.js',
  plugins: [ babel() ],
}).then( function(bundle) {
  bundle.write({
    format: 'es6',
    dest: 'lib.es6.js'
  })
  bundle.write({
    format: 'umd',
    moduleName: 'probably',
    dest: 'lib.js'
  })
}).catch( err => console.log(err) )
