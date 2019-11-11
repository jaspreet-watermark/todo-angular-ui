app.controller('editCtrl', ['$scope', '$log', 'Item', '$routeParams','$location','notifyService',
    function ($scope, $log, Item, $routeParams, $location, notifyService) {
        $scope.item = getItem($routeParams.id);

        // scope functions
        $scope.updateItem = function() {
            Item.update({id: $routeParams.id}, $scope.item).$promise.then(function (response) {
                $location.path('#/');
                notifyService.showSucess('Item Successfully Updated!');
            },function(error) {
                $log.error(error);
                notifyService.showError(notifyService.filterError(error.data.error));
            });
        };

        // local functions
        function getItem(id) {
            Item.get({id: id}).$promise.then(function (response) {
                $scope.item = response.item;
            },function(error) {
                $log.error(error);
                notifyService.showError(error.data.error);
            });
        }
    }]);