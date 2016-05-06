// Player.js

module.exports = {

    attributes: {
        id: {
            type: 'integer',
            primaryKey: true,
            foreignKey: true,
            autoIncrement: true,
            required: true
        }, 
        name: {
            type: 'string',
            required: true
        },
        email: {
            type: 'string'
        },
        slackId: {
            type: 'integer'
        },
        profile: {
            type: 'string'
        }
    }

}