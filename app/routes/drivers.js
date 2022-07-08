module.exports = function(application){

    application.get('/drivers', function (req, res) {
        var conn = application.config.db();
        var driversModel = new application.app.models.driversModel(conn);

        driversModel.getDrivers(conn, function(err, result){
            res.render("drivers/drivers", {pilotos : result});
        });
    });

};