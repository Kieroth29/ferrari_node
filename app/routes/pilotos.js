module.exports = function(application){

    application.get('/pilotos', function (req, res) {
        var conn = application.config.db();
        var pilotosModel = new application.app.models.pilotosModel(conn);

        pilotosModel.getPilotos(conn, function(err, result){
            res.render("pilotos/pilotos", {pilotos : result});
        });
    });

};