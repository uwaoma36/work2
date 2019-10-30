var chemistry="chemistry";
var physics="physics";
var maths="maths";
var biology="biology";
var geography="geography";
var app = angular.module('scoreboard',[]); 
app.controller('chemistryCtrl', function ($scope, $http) { $http.get("dbscore.php?subject="+chemistry).
success(function (response) {$scope.record = response.details;}); }); 


app.controller('biologyCtrl', function ($scope, $http) { $http.get("dbscore.php?subject="+biology).
success(function (response) {$scope.record = response.details;}); }); 


app.controller('mathsCtrl', function ($scope, $http) { $http.get("dbscore.php?subject="+maths).
success(function (response) {$scope.record = response.details;}); }); 

app.controller('geographyCtrl', function ($scope, $http) { $http.get("dbscore.php?subject="+geography).
success(function (response) {$scope.record = response.details;}); }); 

app.controller('physicsCtrl', function ($scope, $http) { $http.get("dbscore.php?subject="+physics).success(function (response) {$scope.record = response.details;}); }); 














