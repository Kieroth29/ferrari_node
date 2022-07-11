module.exports.getDriver = function(application, req, res){
    var conn = application.config.db();
    var driversModel = new application.app.models.driversModel(conn);

    driversModel.getDriver(conn, req.query.id, function(err, result){
        res.render("drivers/driver", {piloto : result});
    });
}

module.exports.getDrivers = function(application, req, res){
    var conn = application.config.db();
    var driversModel = new application.app.models.driversModel(conn);

    driversModel.getDrivers(conn, function(err, result){
        res.render("drivers/drivers", {pilotos : result});
    });
}