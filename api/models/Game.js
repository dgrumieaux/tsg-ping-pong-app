// Game.js

module.exports = {
	attributes: {

		id: {
            type: 'integer',
            primaryKey: true,
            foreignKey: true,
            autoIncrement: true,
            required: true
        }, 

		winner: {
			model: 'Player',
			required: true
		},

		loser: {
			model: 'Player',
			required: true
		},

		winnerScore: {
			model: 'Player',
			required: true
		},

		loserScore: {
			type: 'integer',
			required: true
		},

		type: {
			type: 'string',
			enum: ['1v1'], // 2v2 not yet supported
			defaultsTo: '1v1'
		},

		date: {
			type: 'date',
			required: true
		},

		belongsTo: {
			model: 'LeagueMatch'
		}


	}



}