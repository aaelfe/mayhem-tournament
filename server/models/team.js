import mongoose from 'mongoose';
import * as player from './player.js';

const teamSchema = mongoose.Schema({
    players: {
        type:[player.playerSchema]
    }
});

//const Team = mongoose.model('Team', teamSchema);

export default teamSchema;