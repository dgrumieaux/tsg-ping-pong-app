// LeagueMatch.js

module.exports = {

    attributes: {

        id: {
            type: 'integer',
            primaryKey: true,
            foreignKey: true,
            autoIncrement: true,
            required: true
        }, 

        games: {
            collection: 'game',
            via: 'belongsTo'
        },

        belongsTo: {
            model: 'league'
        }

    }

}