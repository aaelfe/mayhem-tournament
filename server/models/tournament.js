import mongoose from 'mongoose';
import roundSchema from './round.js'

const tournamentSchema = mongoose.Schema({
    rounds: {
        type: [roundSchema]
    }
});

const Tournament = mongoose.model('Tournament', tournamentSchema);

export default Tournament;