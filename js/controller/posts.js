app.controller('PostsCtrl', function ($scope, Post) {
    $scope.loading = true;
    $scope.posts = Post.getPosts().then(function(posts) {
        $scope.loading = false;
        $scope.posts = posts;
    }, function(msg) {
        alert(mstg);
    })

})
