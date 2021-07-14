import shuffle from './shuffle.js';

export default function tournamentGenerator(players, rounds, teamSize) {  //coding such that teams are evenly distributed (instead of having 1 player sit out, teamsize is overruled and multiple teams will be missing a player)
    const tournament = [];
    const shuffledPlayers = shuffle([...players]);
    const playersWithConnections=[];

    for(let i = 0; i<shuffledPlayers.length; i++) { //rn this populates the arr with objects containing a corresponding player and connectionTracker obj which contains numConnections and an ID
        playersWithConnections.push({               //Could be refactored with array methods
            player: shuffledPlayers[i],
            connectionTracker: []
        });
        for(let j=0; j<shuffledPlayers.length; j++) {
            if(i!==j) {
                playersWithConnections[i].connectionTracker.push({ numConnections: 0, connectionID: shuffledPlayers[j].id });
            }
        }
    } //working up to here

    let numberOfTeams = Math.ceil(players.length/teamSize);

    for(let r=1; r<=rounds; r++) {
        tournament.push({ teams:[] });
        tournament[r-1].round=r;
    }

    //console.log(playersWithConnections);
}
