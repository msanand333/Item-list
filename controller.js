var app = angular.module("myList", []);
app.controller("myListController", function ($scope) {
    $scope.items = ["AngularJS", "NodeJS", "ReactJS"];
     $scope.iName="";

    $scope.add = function (iName){
        if ($scope.iName != "") {
            $scope.items.push(iName);
            $scope.iName = "";
        }
    };

    $scope.remove = function (index) {
        $scope.items.splice(index, 1);
    };

});