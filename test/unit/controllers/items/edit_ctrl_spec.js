beforeEach(module('app'));

describe('Testing Items Edit Controller', function () {

    var scope, ctrl, httpBackend, notifyService;

    var getResponse = {
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

    var putResponse = {
        "item": {
            "id": "5dcbdd0dd450cb2f8b4599cf",
            "title": "New Title",
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
        ctrl = $controller('editCtrl', {$scope:scope, $routeParams: {id: '5dcbdd0dd450cb2f8b4599cf'}});
        notifyService = _notifyService_;

        httpBackend = $httpBackend;
        httpBackend.expectGET('http://localhost:3000/api/v1/items/5dcbdd0dd450cb2f8b4599cf')
            .respond(getResponse);
        httpBackend.flush();

    }));

    afterEach(function() {
        httpBackend.verifyNoOutstandingExpectation();
        httpBackend.verifyNoOutstandingRequest();
    });

    it('should fetch an item by id 5dcbdd0dd450cb2f8b4599cf', function() {
        expect(scope.item).toEqual(getResponse["item"]);
        expect(scope.newTag).toBe('');
        expect(scope.tags).toEqual(getResponse["item"]["tags"]);
    });

    it('should update an item with id 5dcbdd0dd450cb2f8b4599cf', function() {
        //  mock notify service
        spyOn(notifyService, 'showSucess').and.callFake(function () {return true});

        scope.item = putResponse["item"];

        scope.tags = [];

        // add tags
        scope.newTag = 'bad';
        scope.addTag();

        //remove tags
        scope.removeTag(0);

        // add tags
        scope.newTag = 'good';
        scope.addTag();

        scope.updateItem();

        httpBackend.expectPUT('http://localhost:3000/api/v1/items/5dcbdd0dd450cb2f8b4599cf', scope.item)
            .respond(putResponse);
        httpBackend.flush();

        expect(scope.item).toEqual(putResponse["item"]);
        expect(scope.tags).toEqual(putResponse["item"]["tags"]);
    });
});
