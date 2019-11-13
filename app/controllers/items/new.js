app.controller('newCtrl', ['$scope', '$log', 'RequestBuilder', '$location','notifyService',
    function ($scope, $log, RequestBuilder, $location, notifyService) {
        $scope.item = {title: '', status: 'prepared'};

        // scope functions
        $scope.createItem = function() {
            RequestBuilder.save($scope.item).$promise.then(function (response) {
                $location.path('#/');
                notifyService.showSucess('Item Successfully Created!');
            },function(error) {
                $log.error(error);
                notifyService.showError(notifyService.filterError(error.data.error));
            });
        };
    }]);