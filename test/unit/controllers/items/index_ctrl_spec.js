beforeEach(module('app'));

describe('Testing Items Index Controller', function () {

    var scope, ctrl, httpBackend;

    var response = {
        "items": [
            {
                "id": "5dcbdd6bfb4b4b0004aca6b1",
                "title": "test 1",
                "status": "prepared",
                "description": null,
                "tags": [
                    {
                        "name": "bad",
                        "slug": "bad"
                    }
                ],
                "due_at": null,
                "started_at": null,
                "completed_at": null,
                "created_at": "November 13, 2019 10:39 AM",
                "updated_at": "November 13, 2019 01:44 PM"
            },
            {
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
            }],
        "total": 2
    };

    var tagResponse = {
        "items": [
            {
                "id": "5dcbdd6bfb4b4b0004aca6b1",
                "title": "test 1",
                "status": "prepared",
                "description": null,
                "tags": [
                    {
                        "name": "bad",
                        "slug": "bad"
                    }
                ],
                "due_at": null,
                "started_at": null,
                "completed_at": null,
                "created_at": "November 13, 2019 10:39 AM",
                "updated_at": "November 13, 2019 01:44 PM"
            }],
        "total": 1
    };

    beforeEach(inject(function($controller, $rootScope, $httpBackend) {
        scope = $rootScope.$new();
        ctrl = $controller('indexCtrl', {$scope:scope});

        httpBackend = $httpBackend;
        httpBackend.expectGET('http://localhost:3000/api/v1/items?page=1')
            .respond(response);
        httpBackend.flush();

    }));

    afterEach(function() {
        httpBackend.verifyNoOutstandingExpectation();
        httpBackend.verifyNoOutstandingRequest();
    });

    it('should fetch items', function() {
        expect(scope.currentPage).toBe(1);
        expect(scope.tag).toBe('');
        expect(scope.items).toEqual(response["items"]);
        expect(scope.total).toBe(response["total"]);
        expect(scope.pageSize).toBe(10);
    });

    it("should fetch by tag", function(){
        scope.tag = 'bad';
        scope.searchByTag();

        httpBackend.expectGET('http://localhost:3000/api/v1/items?page=1&tag=bad')
            .respond(tagResponse);
        httpBackend.flush();

        expect(scope.items).toEqual(tagResponse["items"]);
        expect(scope.total).toBe(tagResponse["total"]);
    });
});
