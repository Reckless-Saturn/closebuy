angular.module('selleritems', [])

.controller('SellerItemsController', function($scope, BuyItems, $state, $q) {

  $scope.getSellerItems = function(){
    //a promise going to get the new items 
    var promise = BuyItems.getNewItems(); 

    //once items are back, then do the following
    promise.then(function(items){
      //set the scope.items to the items retrieved
      $scope.items = items;
      $scope.itemIndex = 0;
      console.log($scope.items);
      //display the first item
      $scope.currentItem = $scope.items[$scope.itemIndex];
    }, function(err){
      console.log("error retrieving items");
    });  
  };

  
});