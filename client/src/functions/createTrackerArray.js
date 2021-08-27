export const createTrackerArray = (shuffledPlayers, tracker) => {
    for(let i = 0; i<shuffledPlayers.length; i++) { //rn this populates the arr with objects containing a corresponding player and connectionTracker obj which contains numConnections and an ID
       tracker.push({               //Could be refactored with array methods
            player: shuffledPlayers[i],
            connectionTracker: []
        });
        for(let j=0; j<shuffledPlayers.length; j++) {
            if(i!==j) {
                tracker[i].connectionTracker.push({ numConnections: 0, connectionID: shuffledPlayers[j].id });
            }
        }
    } 
}