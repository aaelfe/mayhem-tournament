import shuffle from './shuffle.js';
import { createTrackerArray } from './createTrackerArray.js';
//should i make this async?
export default function tournamentGenerator(players, rounds, teamSize) {  //coding such that teams are evenly distributed (instead of having 1 player sit out, teamsize is overruled and multiple teams will be missing a player)
    const tournament = [];
    const shuffledPlayers = shuffle([...players]);
    const playersWithConnections=[];

    createTrackerArray(shuffledPlayers, playersWithConnections);
    console.log(playersWithConnections);
    //working up to here

    let numberOfTeams = Math.ceil(players.length/teamSize);

    for(let r=1; r<=rounds; r++) {
        tournament.push({ teams:[] });
        tournament[r-1].round=r;
    }

    //console.log(playersWithConnections);
}
