const Users = require('../models/Users');

module.exports = {

    create: function(params, callback) {
        Users.create(params, function(err, result) {
            if (err) {
                callback(err, null);
                return
            }
            callback(null, result);
        })
    },

    find: function(params, callback) {
        Users.find(params, function(err, results) {
            if (err) {
                callback(err, null);
                return;
            }
            callback(null, results);
        })
    }
}
