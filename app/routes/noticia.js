module.exports = function(application){

    application.get('/noticia', function(req, res){
        var conn = application.config.db();
        var noticiasModel = new application.app.models.noticiasModel(conn);

        noticiasModel.getNoticia(conn, req.query.id, function(err, noticia){
            noticiasModel.getNoticiasProximas(conn, req.query.id, function(err, noticiasProximas){
                res.render('noticias/noticia', {noticia: noticia, noticiasProximas: noticiasProximas});
            });
        });
    });

}