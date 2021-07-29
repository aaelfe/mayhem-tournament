import mongoose from 'mongoose';
import Team from './team.js';

const roundSchema = mongoose.Schema({
    teams: [Team]
});

const Round = mongoose.model('Round', roundSchema);

export default Round;