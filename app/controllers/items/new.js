app.controller('newCtrl', ['$scope', '$log', 'Item', '$location','notifyService',
    function ($scope, $log, Item, $location, notifyService) {
        $scope.item = {title: '', status: 'prepared'};

        // scope functions
        $scope.createItem = function() {
            Item.save($scope.item).$promise.then(function (response) {
                $location.path('#/');
                notifyService.showSucess('Item Successfully Created!');
            },function(error) {
                $log.error(error);
                notifyService.showError(notifyService.filterError(error.data.error));
            });
        };
    }]);