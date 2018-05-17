const express = require('express')
const router = express.Router();
const userController = require('../controllers/userController');

router.post('/', function(req, res, next) {
    userController.create(req.body, function(err, result) {
        if (err) {
            console.log(err);
            res.json({
                success: 0,
                error: err
            })
            return;
        }

        res.json({
            success: 1,
            data: result
        })
    })
})

router.get('/', function(req, res, next) {

    userController.find(req.query, function(err, results) {
        if (err) {
            console.log(err);
            res.json({
                success: 0,
                error: err
            })

            return;
        }
        res.json({
            success: 1,
            data: results
        })
    })
})

module.exports = router;
