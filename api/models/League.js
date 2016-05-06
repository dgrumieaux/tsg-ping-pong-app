// League.js

module.exports = {

    attributes: {

        id: {
            type: 'integer',
            primaryKey: true,
            foreignKey: true,
            autoIncrement: true,
            required: true
        },

        leagueMatches: {
            collection: 'leaguematch',
            via: 'belongsTo'
        }

    }

}