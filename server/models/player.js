import mongoose from 'mongoose';

//create schema
const playerSchema = mongoose.Schema({ name: String });

//create model w schema
const Player = mongoose.model('Player', playerSchema);

//export model
export default Player;