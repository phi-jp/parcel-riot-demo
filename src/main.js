import riot from 'riot'
import Firerest from 'firerest'
import './tags/*.tag'
import './tags/**/*.tag'

// global に展開(他で import する必要がなくなる)
global.Firestore = Firerest;

// // package.json 読めるかの実験
const config = require('../package.json');
console.log(config);

riot.mount('*');


