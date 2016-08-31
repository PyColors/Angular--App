/**
 * GET data
 * Factory
 */
app.factory('Post', function($http, $q, $timeout) {

    var factory = {
        posts: false,
        find: function() {
            var deferred = $q.defer();
            /* Optimisation: call Json just once */
            if (factory.posts !== false) {
                deferred.resolve(factory.posts);
            } else {
                $http.get('posts.json')
                    .success(function(data, status) {
                        factory.posts = data;
                        $timeout(function() {
                            deferred.resolve(factory.posts);
                        }, 2000)

                    }).error(function(data, status) {
                        deferred.reject('Sorry...');
                    });
            }
            return deferred.promise;
        },
        get: function(id) {
            var deferred = $q.defer();
            var post = {};
            var posts = factory.find().then(function(posts) {
                angular.forEach(posts, function(value, key) {
                    if (value.id == id) {
                        post = value
                    }
                });
                deferred.resolve(post);
            }, function(msg) {
                deferred.reject(msg);
            })
            return deferred.promise;
        }
    };
    return factory;
})
