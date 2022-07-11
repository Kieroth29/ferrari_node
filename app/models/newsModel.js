function NewsDAO(){
}

NewsDAO.prototype.getArticle = function(connection, id, callback){
    connection.query("SELECT * from noticias where id = " + id + ";", callback);
}

NewsDAO.prototype.getArticles = function(connection, callback){
    connection.query("SELECT * from noticias;", callback);
}

NewsDAO.prototype.getRecentArticles = function(connection, id, callback){
    connection.query(`
        SELECT * FROM (
            SELECT * FROM noticias WHERE id > ` + id + ` ORDER BY id LIMIT 1
        ) x
      
        UNION ALL
      
        SELECT * FROM (
            SELECT * FROM noticias WHERE id < ` + id + ` ORDER BY id DESC LIMIT 1
        ) y
        
        ORDER BY id;`, callback);
}

NewsDAO.prototype.setArticle = function(connection, article, callback){
    connection.query('INSERT INTO noticias SET ?', article, callback);
}

module.exports = function(){
    return NewsDAO;
}