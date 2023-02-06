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
	
	$scope.redirectTest = function () {
		window.location="test.html";
	}
	$scope.redirectWeek5 = function () {
		window.location="week5.html";
	}
	$scope.redirectWeek6 = function () {
		window.location="week6.html";
	}
	$scope.redirectWeek7 = function () {
		window.location="week7.html";
	}
	$scope.redirectWeek8 = function () {		
		window.location="week8.html";
	}
}
