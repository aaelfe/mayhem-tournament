import mongoose from 'mongoose';
import Player from './player.js';

const teamSchema = mongoose.Schema({
    players: [Player]
});

const Team = mongoose.model('Team', teamSchema);

export default Team;