app.controller('indexCtrl', ['$scope', '$log', 'Item', '$location','notifyService',
    function ($scope, $log, Item, $location, notifyService) {

        // scope variables
        $scope.page = $location.search().page || 1;
        $scope.items =[];

        loadItems();

        // local functions
        function loadItems() {
            Item.query({page: $scope.page}).$promise.then(function (response) {
                $scope.items = response.items;
            },function(error) {
                $log.error(error);
                notifyService.showError('Something Went Wrong!');
            });
        }
    }]);