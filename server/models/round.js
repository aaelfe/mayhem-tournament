import mongoose from 'mongoose';
import teamSchema from './team.js';

const roundSchema = mongoose.Schema({
    teams: {
        type: [teamSchema]
    }
});

//const Round = mongoose.model('Round', roundSchema);

export default roundSchema;