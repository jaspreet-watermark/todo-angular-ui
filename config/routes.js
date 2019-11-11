//Routes
app.config(function ($routeProvider) {
    $routeProvider
        .when('/', {
            templateUrl: 'app/views/items/index.html',
            controller: 'indexCtrl'
        })
        .when('/items/new', {
            templateUrl: 'app/views/items/new.html',
            controller: 'newCtrl'
        })
        .when('/items/:id/edit', {
            templateUrl: 'app/views/items/edit.html',
            controller: 'editCtrl'
        })
        .when('/items/:id/destroy', {
            template: '',
            controller: 'deleteCtrl'
        })
        .otherwise({redirectTo: '/'});
});

