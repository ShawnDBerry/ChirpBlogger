angular.module("Chirper.factories", [])

    .factory("User", ["$resource", function($resource) {
        return $resource("http://localhost:3000/api/users");
    }])

    .factory("Chirp", ["$resource", function($resource) {
        return $resource("http://localhost:3000/api/chirps/:id", 
        {
            id: "@id"
        },
        {
            'update': {method: "PUT"}
        })
    }])