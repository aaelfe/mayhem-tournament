import mongoose from 'mongoose';
import Tournament from '../models/tournament.js';

export const getTournaments = async (req, res) => {
    try {
        const tournaments = await Tournament.find();

        res.status(200).json(tournaments);
    } catch (error) {
        res.status(404).json({error});
    }
}

export const createTournament = async (req, res) => {
    const newTournament = new Tournament(req.body);
    
    try {
        await newTournament.save();
    } catch (error) {
        res.status(409).json({error});
    }
}

export const deleteTournament = async (req, res) => {
    const {_id} = req.params;
    await Tournament.findByIdAndRemove(_id);
    res.json({message: 'Tournament deleted'});
}