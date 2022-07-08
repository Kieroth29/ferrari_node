function DriversDAO(){
}

DriversDAO.prototype.getDrivers = function(connection, callback){
    connection.query("SELECT * from pilotos;", callback);
}

DriversDAO.prototype.getDriver = function(connection, id, callback){
    connection.query("SELECT * from pilotos where id = " +id + ";", callback);
}
module.exports = function(){

    return DriversDAO;

}