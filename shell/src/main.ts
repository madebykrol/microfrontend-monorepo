import { loadRemoteEntry } from './app/federation-utils';

Promise.all([
    loadRemoteEntry('http://localhost:5000/remoteEntry.js', 'dashboard')
])
.catch(err => console.error('Error loading remote entries', err))
.then(() => import('./bootstrap'))
.catch(err => console.error(err));