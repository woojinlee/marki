import { https } from 'firebase-functions';
import store from './store';

export const hello = https.onRequest(async (req, res) => {
    res.send('Hello!');
});

export const hello2 = https.onRequest(async (req, res) => {
    res.send('Hello2!');
});

export const allUsers = https.onRequest(async (req, res) => {
    const { docs: user } = await store
    .collection('user')
    .get();
    res.send(user);
});