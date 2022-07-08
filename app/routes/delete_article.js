module.exports = function(application){

    application.get('/delete_article', function (req, res){
        var conn = application.config.db();

        var articleId = req.query.articleId;

        if(!articleId){
            return res.status(404).json({error: 'Request missing article ID.'}).send();
        }
        
        conn.query("SELECT * FROM noticias WHERE id = " + articleId + ";", function (err, result) {  
            if(result.length == 0){
                return res.status(400).json({error: "Article with provided ID does not found."}).send();
            }else{
                conn.query("DELETE FROM noticias WHERE id = " + articleId + ";", function (err, result) {
                    if (err) throw err;
                    return res.redirect('/news');
                });
            }
        });
    });

}