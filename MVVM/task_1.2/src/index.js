import san from 'san';
import {router} from 'san-router';
import app from './app.san';
console.log("Hello World");

router.add({rule: '/', Component: app, target: '#app'})
router.start();