import express from 'express';
//import controllers here
import { getPlayers, createPlayer } from '../controllers/players.js';

const playerRoutes=express.Router();

//create routes here
playerRoutes.get('/', getPlayers);
playerRoutes.post('/', createPlayer);

export default playerRoutes;