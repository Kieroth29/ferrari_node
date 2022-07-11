module.exports = function(application){

    application.get('/driver', function (req, res) {
        application.app.controllers.drivers.getDriver(application, req, res);
    });

};