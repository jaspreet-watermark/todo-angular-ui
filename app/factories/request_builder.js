app.factory('RequestBuilder', ['$resource', function ($resource) {
    var url = 'http://localhost:3000/api/v1/items/:id';
    var params = {id: '@_id'};
    var actions = {
        'query':  { method:'GET', isArray: false },
        "update": { method: 'PUT' },
        "destroy": { method: 'DELETE' },
    };
    return $resource(url, params, actions);
}]);


