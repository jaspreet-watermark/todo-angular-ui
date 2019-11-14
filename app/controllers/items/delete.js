app.controller('deleteCtrl', ['$scope', 'ItemRequestBuilder', '$routeParams','$location','notifyService',
    function ($scope, ItemRequestBuilder, $routeParams, $location, notifyService) {

        // scope variables
        $scope.id = $routeParams.id;
        deleteItem($scope.id);

        // local functions
        function deleteItem(id) {
            ItemRequestBuilder.destroy({id: id}).$promise.then(function (response) {
                $location.path('#/');
                notifyService.showSucess('Item Successfully Deleted!');
            },function(error) {
                $location.path('#/');
                notifyService.showError(error.data.error);
            });
        }
    }]);
