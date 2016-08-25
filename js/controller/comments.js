app.controller('CommentsCtrl', function ($scope, Post, $routeParams) {
    $scope.loading = true;
    var post = Post.getPosts($routeParams.id).then(function(post) {
        $scope.loading = false;
        $scope.title = post.name;
        $scope.comments = post.comments;
    }, function(msg) {
        alert(msg);
    })
});
