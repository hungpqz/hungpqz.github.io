function mldCtrl($scope, $http) {

    $scope.redirectDacbiet = function () {
        window.location = "dacbiet.html";
    }
	
	
	$scope.redirectNext = function () {
        window.location = "ready.html";
    }
    $scope.redirectGiainhat = function () {
        window.location = "giainhat.html";
    }
    $scope.redirectKhuyenkhich = function () {
        window.location = "khuyenkhich.html";
    }
}
