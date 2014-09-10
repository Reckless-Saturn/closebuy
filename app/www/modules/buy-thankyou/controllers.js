angular.module('buythankyou', [])

.controller('BuyThanksController', function($scope, $state) {
  $scope.redirect = function() {
    console.log('in redirect');
    setTimeout(function() {
      $state.go('tab.buybrowse');
    }, 2000);
  };
});