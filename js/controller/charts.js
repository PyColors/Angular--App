app.controller('ChartsCtrl', function ($scope, $rootScope, Post, $routeParams) {
    $rootScope.loading = true;
    Post.get($routeParams.id).then(function(post) {
        $rootScope.loading = false;
        $scope.title = post.name;
        $scope.charts = post.charts;
    }, function(msg) {
        alert(msg);
    })
});
