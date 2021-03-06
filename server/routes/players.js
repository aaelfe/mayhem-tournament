import express from 'express';
//import controllers here
import { getPlayers, createPlayer, deletePlayer } from '../controllers/players.js';

const playerRoutes=express.Router();

//create routes here
playerRoutes.get('/', getPlayers);
playerRoutes.post('/', createPlayer);
playerRoutes.delete('/:_id', deletePlayer); //might need to delete underscore

export default playerRoutes;