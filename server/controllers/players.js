import mongoose from 'mongoose';
//import model here
import * as player from '../models/player.js';

//create (and export) controllers here
export const getPlayers = async (req, res) => {
    try {
        const players = await player.Player.find();

        res.status(200).json(players);
    } catch (error) {
        res.status(404).json({error});
    }
}

export const createPlayer = async (req, res) => {
    const newPlayer = new player.Player(req.body);

    try {
        await newPlayer.save();
        res.status(200).json(newPlayer);
    } catch (error) {
        res.status(409).json({error});
    }
}
export const deletePlayer = async (req, res) => {
    const {_id} = req.params;
    await player.Player.findByIdAndRemove(_id);
    res.json({message: 'Player deleted'});
}