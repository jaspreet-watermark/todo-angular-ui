beforeEach(module('app'));

describe('Testing Items Delete Controller', function () {

    var scope, ctrl, httpBackend, notifyService;

    var response = {
        "item": {
            "id": "5dcbdd0dd450cb2f8b4599cf",
            "title": "ff",
            "status": "prepared",
            "description": null,
            "tags": [
                {
                    "name": "good",
                    "slug": "good"
                }
            ],
            "due_at": null,
            "started_at": null,
            "completed_at": null,
            "created_at": "November 13, 2019 10:38 AM",
            "updated_at": "November 13, 2019 01:44 PM"
        }
    };

    beforeEach(inject(function($controller, $rootScope, $httpBackend, _notifyService_) {
        scope = $rootScope.$new();
        ctrl = $controller('deleteCtrl', {$scope:scope, $routeParams: {id: '5dcbdd0dd450cb2f8b4599cf'}});
        notifyService = _notifyService_;

        //  mock notify service
        spyOn(notifyService, 'showSucess').and.callFake(function () {return true});

        httpBackend = $httpBackend;
        httpBackend.expectDELETE('http://localhost:3000/api/v1/items/5dcbdd0dd450cb2f8b4599cf')
            .respond(response);
        httpBackend.flush();
    }));

    afterEach(function() {
        httpBackend.verifyNoOutstandingExpectation();
        httpBackend.verifyNoOutstandingRequest();
    });

    it('should delete an item with id 5dcbdd0dd450cb2f8b4599cf', function() {
        expect(scope.id).toBe(response["item"]["id"]);
    });
});
