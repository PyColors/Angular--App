app.controller('PostsCtrl', function ($scope, $rootScope, Post) {
    $rootScope.loading = true;
    $scope.posts = Post.find().then(function(posts) {
        $rootScope.loading = false;
        $scope.posts = posts;
        $scope.search = {}
    }, function(msg) {
        alert(mstg);
    })

})
