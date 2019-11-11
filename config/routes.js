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
        .when('/item/:id', {
            templateUrl: 'app/views/items/edit.html',
            controller: 'editCtrl'
        })
        .otherwise({redirectTo: '/'});
});

