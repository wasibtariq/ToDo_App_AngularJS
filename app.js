var app = angular.module('myApp', []); 
app.controller('todoController', function($scope) {
    $scope.todoTaskList = [{todoTaskText:'Shopping', done:false}];

    $scope.addTask = function() {
        $scope.todoTaskList.push({todoTaskText:$scope.todoVal, done:false});
        $scope.todoVal = "";
    };

    $scope.removeTask = function() {
        var oldList = $scope.todoTaskList;
        $scope.todoTaskList = [];
        angular.forEach(oldList, function(x) {
            if(!x.done) {
				$scope.todoTaskList.push(x);
			}
        });
    };
});