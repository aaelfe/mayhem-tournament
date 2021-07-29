import express from 'express';
import { getTournaments, createTournament, deleteTournament } from '../controllers/tournaments.js';

const tournamentRoutes = express.Router();

tournamentRoutes.get('/', getTournaments);
tournamentRoutes.post('/', createTournament);
tournamentRoutes.delete('/:_id', deleteTournament);

export default tournamentRoutes;