module.exports = function(app){

    app.get('/driver', function (req, res) {
        var conn = app.config.db();
        var driversModel = new app.app.models.driversModel(conn);

        driversModel.getDriver(conn, req.query.id, function(err, result){
            res.render("drivers/driver", {piloto : result});
        });
    });

};