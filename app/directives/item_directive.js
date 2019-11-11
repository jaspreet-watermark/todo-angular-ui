// DIRECTIVES
app.directive("itemPartial", function() {
    return {
        restrict: 'A',
        templateUrl: '../app/views/partials/item.html',
        replace: false,
        scope: {
            item: "=",
        }
    }
});