import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';

//import routes
import playerRoutes from './routes/players.js';
import tournamentRoutes from './routes/tournaments.js';

const app = express();
dotenv.config();

app.use(express.json());
app.use(express.urlencoded());
app.use(cors());

app.use('/players', playerRoutes);
app.use('/tournaments', tournamentRoutes);

app.get('/', (req, res) => {
    res.send('Hello');
})

const PORT = process.env.PORT || 5000;

mongoose.connect(process.env.CONNECTION_URL, {
    useNewUrlParser: true, useUnifiedTopology: true
})
    .then(() => app.listen(PORT, () => console.log(`Server running, port ${PORT}`)))
    .catch((err) => console.log(err));

mongoose.set('useFindAndModify', false);