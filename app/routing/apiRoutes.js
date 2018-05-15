const friends = require('../data/friends');

module.exports = function(app){
    app.get('/api/friends', ( req, res ) => {
        res.json(friends);
    });

    app.post('/api/friends', ( req, res ) => {
        const candidates = [];
        let smallest = 0;
        let smallestIndex = 0;

        for(let i = 0; i < friends.length; i++){ // push all of the differences into an array

            let diff = friends[i].scores.reduce( ( sum, currentValue, index ) => {
                sum += Math.abs( currentValue - req.body.scores[index] );
                return sum
            }, 0);

            candidates.push(diff)
        }

        smallest = candidates[0];

        for(let s = 0; s < candidates.length; s++){ // find the index and value of the most similar candidate
            if( candidates[s] <= smallest ){
                smallestIndex = s;
                smallest = candidates[s];
            }
        }

        res.json( // stripping out the perfect candidate scores for personal security... of fictional characters
            { 
                name: friends[smallestIndex].name,
                photo: friends[smallestIndex].photo
            }
        );
    });
};