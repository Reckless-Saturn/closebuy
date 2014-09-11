angular.module('myAccount', ['myAccount.services'])

.controller('MyAccountController', function($scope, $state, Settings, Auth) {
  // these need to be refactored. They didn't really use services correctly. 
  $scope.logoutUser = function() {
    Auth.logoutUser();
  };
  $scope.goToStore = function() {
    // this should link to the store page. 
    $state.go('tab.selleritems')
  };
});