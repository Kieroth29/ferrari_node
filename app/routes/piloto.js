module.exports = function(app){

    app.get('/piloto', function (req, res) {
        var conn = app.config.db();
        var pilotosModel = new app.app.models.pilotosModel(conn);

        pilotosModel.getPiloto(conn, req.query.id, function(err, result){
            res.render("pilotos/piloto", {piloto : result});
        });
    });

};