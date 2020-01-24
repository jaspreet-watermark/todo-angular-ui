app.controller('indexCtrl', ['$scope', 'ItemRequestBuilder','notifyService',
    function ($scope, ItemRequestBuilder, notifyService) {

        // scope variables
        $scope.currentPage = 1;
        $scope.tag = '';
        $scope.items = [];
        $scope.total = 0;
        $scope.pageSize = 10;
        $scope.modalDisplay = false;


        loadItems();

        $scope.paginate = function(page){
            $scope.currentPage = page;
            loadItems();
        };

        $scope.searchByTag = function(){
            loadItems();
        };

        $scope.reset = function(){
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
            ItemRequestBuilder.query(query).$promise.then(function (response) {
                $scope.items = response.items;
                $scope.total = response.total;
            },function(error) {
                notifyService.showError('Something Went Wrong!');
            });
        }

        $scope.display = function(id){
            console.log("Dsfsfsdfs");
            console.log(id);
            $scope.item = $scope.items.filter(function(item) {
                return item.id === id;
            })[0];
            console.log($scope.item)
            $scope.modalDisplay = true;
        }


        $scope.close = function(){
            $scope.modalDisplay = false;
        }
    }]);
