module.exports = function(application){

    application.get('/drivers', function (req, res) {
        application.app.controllers.drivers.getDrivers(application, req, res);
    });

};