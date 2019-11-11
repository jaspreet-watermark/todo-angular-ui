app.controller('deleteCtrl', ['$scope', '$log', 'Item', '$routeParams','$location','notifyService',
    function ($scope, $log, Item, $routeParams, $location, notifyService) {

        // scope variables
        $scope.id = $routeParams.id;
        deleteItem($scope.id);

        // local functions
        function deleteItem(id) {
            Item.destroy({id: id}).$promise.then(function (response) {
                $location.path('#/');
                notifyService.showSucess('Item Successfully Deleted!');
            },function(error) {
                $log.error(error);
                $location.path('#/');
                notifyService.showError(error.data.error);
            });
        }
    }]);