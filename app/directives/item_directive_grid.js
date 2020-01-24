// DIRECTIVES
app.directive("itemPartialGrid", function() {
    return {
        restrict: 'A',
        templateUrl: '../app/views/partials/item_grid.html',
        replace: false,
        scope: {
            item: "=",
            display: "&"
        }
    }
});