beforeEach(module('app'));

describe('Testing Items New Controller', function () {

    var scope, ctrl, httpBackend, notifyService;

    var response = {
        "item": {
            "id": "5dcbdd0dd450cb2f8b4599cf",
            "title": "New Title 1",
            "status": "prepared",
            "description": null,
            "tags": [],
            "due_at": null,
            "started_at": null,
            "completed_at": null,
            "created_at": "November 13, 2019 10:38 AM",
            "updated_at": "November 13, 2019 01:44 PM"
        }
    };

    beforeEach(inject(function($controller, $rootScope, $httpBackend, _notifyService_) {
        scope = $rootScope.$new();
        ctrl = $controller('newCtrl', {$scope:scope, $routeParams: {id: '5dcbdd0dd450cb2f8b4599cf'}});
        notifyService = _notifyService_;

        httpBackend = $httpBackend;
    }));

    afterEach(function() {
        httpBackend.verifyNoOutstandingExpectation();
        httpBackend.verifyNoOutstandingRequest();
    });

    it('should create an item', function() {
        //  mock notify service
        spyOn(notifyService, 'showSucess').and.callFake(function () {return true});

        scope.item = {title: 'New Title 1', status: 'prepared'};
        scope.createItem();

        httpBackend.expectPOST('http://localhost:3000/api/v1/items', scope.item)
            .respond(response);
        httpBackend.flush();

        expect(scope.item.title).toEqual(response["item"]["title"]);
        expect(scope.tags).toEqual(response["item"]["tags"]);
    });
});
