function NoticiasDAO(){
}

NoticiasDAO.prototype.getNoticia = function(connection, id, callback){
    connection.query("SELECT * from noticias where id = " + id + ";", callback);
}

NoticiasDAO.prototype.getNoticias = function(connection, callback){
    connection.query("SELECT * from noticias;", callback);
}

NoticiasDAO.prototype.getNoticiasProximas = function(connection, id, callback){
    connection.query("SELECT * from noticias where id = " + id + " - 1 or id = " + id + "+ 1;", callback);
}

NoticiasDAO.prototype.setNoticia = function(connection, noticia, callback){
    connection.query('INSERT INTO noticias SET ?', noticia, callback);
}

module.exports = function(){
    return NoticiasDAO;
}