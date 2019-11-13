app.controller('indexCtrl', ['$scope', '$log', 'RequestBuilder','notifyService',
    function ($scope, $log, RequestBuilder, notifyService) {

        // scope variables
        $scope.currentPage = 1;
        $scope.tag = '';
        $scope.items = [];
        $scope.total = 0;
        $scope.pageSize = 10;

        loadItems();

        $scope.paginate = function(page){
            $scope.currentPage = page;
            loadItems();
        };

        $scope.searchByTag = function(page){
            loadItems();
        };

        $scope.reset = function(page){
            $scope.tag = '';
            $scope.currentPage = 1;
            loadItems();
        };

        // local functions
        function loadItems() {
            var query = {page: $scope.currentPage};
            if ($scope.tag !== ''){
                query.tag = $scope.tag;
            }
            RequestBuilder.query(query).$promise.then(function (response) {
                $scope.items = response.items;
                $scope.total = response.total;
            },function(error) {
                $log.error(error);
                notifyService.showError('Something Went Wrong!');
            });
        }
    }]);