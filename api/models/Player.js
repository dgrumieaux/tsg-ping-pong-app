// Player.js

module.exports = {

    attributes: {
        id: {
            type: 'integer',
            autoIncrement: true,
            defaultsTo: 1
        }, 
        name: {
            type: 'string',
            primaryKey: true,
            foreignKey: true,
            unique: true,
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