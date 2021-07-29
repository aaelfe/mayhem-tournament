import axios from 'axios';

const url = 'http://localhost:5000';

export const fetchPlayers = () => axios.get(`${url}/players`);
export const createPlayer = (newPlayer) => axios.post(`${url}/players`, newPlayer);
export const deletePlayer = (_id) => axios.delete(`${url}/players/${_id}`);

export const fetchTournaments = () => axios.get(`${url}/tournaments`);
export const createTournament = (newTournament) => axios.post(`${url}/tournaments`, newTournament);
export const deleteTournament = (_id) => axios.delete(`${url}/tournaments/${_id}`);