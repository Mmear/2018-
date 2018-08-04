import { router } from 'san-router';
import app from './app.san';

router.add({ rule: '/', Component: app, target: '#app' });
router.start();