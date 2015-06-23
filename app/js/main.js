;( function (){

    "use strict";

    angular.module('TheButton', [])
    .controller('LikeController', ['$scope', function($scope) {
        $scope.theClicks = 0;

        $scope.theLike = function(){
        $scope.theClicks ++;


        };

        $scope.likes = function(){

          if ($scope.theClicks === 1){
            return $scope.theClicks + " Like";

          } else {
            return $scope.theClicks + " Likes";
          }

        // if theClicks = 1 then show # + like ||
        //   return # + likes

        // if ( this stuff){
        // then do this
        // }else(otherwise{
        // do this}



        };





      }]);



}());
