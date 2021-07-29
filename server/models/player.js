import mongoose from 'mongoose';

//create schema
export const playerSchema = mongoose.Schema({ name: String });

//create model w schema
export const Player = mongoose.model('Player', playerSchema);