angular.module('buytransaction', ['buybrowse.services'])

.controller('TransactionController', function($scope, $state) {
  $scope.transaction = function() {
    console.log('transaction invoked');
    $state.go('tab.buythankyou');
  };
});