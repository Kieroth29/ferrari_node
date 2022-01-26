module.exports = function(application){
    
    application.get('/adicionar_noticia', function (req, res) {
        res.render("admin/adicionar_noticia")
    });

    application.post('/noticias/adicionar', function (req, res) {
        var noticia = req.body;

        var conn = application.config.db();
        var noticiasModel = application.app.models.noticiasModel();

        noticiasModel.setNoticia(conn, noticia, function (err, result){
            res.redirect('/noticias');
        });
    });

};