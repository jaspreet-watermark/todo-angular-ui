app.service('notifyService', ['notify',function(notify) {

    notify.config({
        templateUrl: 'node_modules/@cgross/angular-notify/angular-notify.html'
    });

    this.showError = function(message) {
        notify({messageTemplate: errorTemplate(message), classes: ' alert-danger'});
    };

    this.showSucess = function(message) {
        notify({message: message, classes: ' alert-success', duration: 2000});
    };

    this.filterError = function(errors) {
        var errorString = '';
        angular.forEach(errors, function(value) {
            errorString = errorString + value + ' </br> '
        });
        return errorString;
    };

    function errorTemplate(message){
       return '<span>' + message + '</span>'
    }

}]);
