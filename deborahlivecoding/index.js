// remplace require en es6
import express from 'express';
import router from './route';
// creer un mini-serveur, une app express, sur le port 1407
let app = express();
app.listen (1407, function(){ console.log ('ecoute sur le port 1407'); });