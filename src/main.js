import riot from 'riot'
import Firerest from 'firerest'
import './tags/*.tag'
import './tags/**/*.tag'

// global に展開(他で import する必要がなくなる)
window.Firestore = Firerest;

riot.mount('*');


