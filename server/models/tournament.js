import mongoose from 'mongoose';
import Round from './round.js'

const tournamentScheme = mongoose.Schema({
    rounds: [Round]
});

const Tournament = mongoose.model('Tournament', tournamentSchema);

export default Tournament;