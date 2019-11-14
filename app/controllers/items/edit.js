app.controller('editCtrl', ['$scope', 'ItemRequestBuilder', '$routeParams','$location','notifyService',
    function ($scope, ItemRequestBuilder, $routeParams, $location, notifyService) {
        $scope.item = getItem($routeParams.id);
        $scope.newTag = '';
        $scope.tags = [];

        // scope functions
        $scope.updateItem = function() {
            $scope.item.tags = $scope.tags;
            ItemRequestBuilder.update({id: $routeParams.id}, $scope.item).$promise.then(function (response) {
                $location.path('#/');
                notifyService.showSucess('Item Successfully Updated!');
            },function(error) {
                notifyService.showError(notifyService.filterError(error.data.error));
            });
        };

        $scope.removeTag = function(index){
            $scope.tags.splice(index, 1);
        };

        $scope.addTag = function(){
            $scope.tags.push({name: $scope.newTag});
            $scope.newTag = '';
        };

        // local functions
        function getItem(id) {
            ItemRequestBuilder.get({id: id}).$promise.then(function (response) {
                $scope.item = response.item;
                $scope.tags = $scope.item.tags;
            },function(error) {
                notifyService.showError(error.data.error);
            });
        }
    }]);
