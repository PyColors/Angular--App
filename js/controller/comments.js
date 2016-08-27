app.controller('CommentsCtrl', function ($scope, $rootScope, Post, $routeParams) {
    $rootScope.loading = true;
    var post = Post.getPosts($routeParams.id).then(function(post) {
        $rootScope.loading = false;
        $scope.title = post.name;
        $scope.comments = post.comments;
    }, function(msg) {
        alert(msg);
    })
});
