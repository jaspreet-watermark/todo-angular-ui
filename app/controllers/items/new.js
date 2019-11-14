app.controller('newCtrl', ['$scope', 'ItemRequestBuilder', '$location','notifyService',
    function ($scope, ItemRequestBuilder, $location, notifyService) {
        $scope.item = {title: '', status: 'prepared'};
        $scope.newTag = '';
        $scope.tags = [];

        // scope functions
        $scope.createItem = function() {
            $scope.item.tags = $scope.tags;
            ItemRequestBuilder.save($scope.item).$promise.then(function (response) {
                $location.path('#/');
                notifyService.showSucess('Item Successfully Created!');
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
    }]);
