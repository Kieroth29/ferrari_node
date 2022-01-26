function PilotosDAO(){
}

PilotosDAO.prototype.getPilotos = function(connection, callback){
    connection.query("SELECT * from pilotos;", callback);
}

PilotosDAO.prototype.getPiloto = function(connection, id, callback){
    connection.query("SELECT * from pilotos where id = " +id + ";", callback);
}
module.exports = function(){

    return PilotosDAO;

}