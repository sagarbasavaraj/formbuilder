/**
 * Rest interface for getting and inserting form data.
 */
(function () {
    var express = require('express');
    var router = express.Router();

    /**
     * Get all forms.
     */
    router.get('/formList', function (req, res, next) {
        var db = req.db;
        var collection = db.get('forms');
        collection.find({},{},function (err, items) {
            if (err) {
                res.send({'error': 'Error in getting form list'});
            } else {
                res.send(items);
            }
        });
    });

    /**
     * store form data to database.
     */
    router.post('/insert', function (req, res, next) {
        var formData = req.body;
        var db = req.db;
        var collection = db.get('forms');
        collection.insert(formData, {safe: true}, function (err, result) {
            if (err) {
                res.send({'error': 'Error in saving form data'});
            } else {
                res.send('form data saved.');
            }
        });

    });

    module.exports = router;
})();