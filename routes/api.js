// Full Documentation - https://www.turbo360.co/docs
const turbo = require('turbo360')({site_id: process.env.TURBO_APP_ID})
const vertex = require('vertex360')({site_id: process.env.TURBO_APP_ID})
const router = vertex.router()

/*  This is a sample API route. */
let Profile = require('../models/Profile');
let Gary = require('../models/GaryModel');

router.get('/profile', function (req, res) {
    Profile.find(req.query).then(function (profiles) {
        res.json(
            {
                confirmation: 'success',
                data: profiles
            }
        );
    }).catch(function (err) {
        res.json(
            {
                confirmation: 'fail',
                message: err.message
            }
        );
    });
});

router.get('/profile/:id', function (req, res) {

    let id = req.params.id;

    Profile.findById(id).then(
        function (profile) {
            res.json(
                {
                    confirmation: "success",
                    data: profile
                }
            )
        }).catch(function (err) {
            res.json({
                confirmation: "fail",
                message: err.message
            })
        }
    );
});


router.post('/create', function (req, res) {

    Profile.create(req.body).then(function (profile) {
        res.json({
            confirmation: 'success',
            data: profile
        })
    }).catch(function (err) {
        res.json(
            {
                confirmation:'fail',
                data: err.message
            }
        );
    });

});

router.get('/gary',function (req, res) {
    Gary.find(req.query).then(function (garys) {
        res.json(
            {
                confirmation: 'success',
                data: garys
            }
        );
    }).catch(function (err) {
        res.json(
            {
                confirmation: 'fail',
                message: err.message
            }
        );
    });
});

router.post('/gary/create', function (req, res) {

    Gary.create(req.body).then(function (gary) {
        res.redirect('/');
    }).catch(function (err) {
        res.json(
            {
                confirmation:'fail',
                data: err.message
            }
        );
    });

});

module.exports = router;
