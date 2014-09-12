angular.module('selleritems', [])

.controller('SellerItemsController', function($scope, BuyItems, $state, $q) {

  $scope.getSellerItems = function(){
    //a promise going to get the new items 
    var promise = BuyItems.getNewItems(); 

    //once items are back, then do the following
    promise.then(function(items){
      //set the scope.items to the items retrieved
      var userId = Parse.User.current().id;
      var sellerItems = items.filter(function(item) { return item.userId === userId; });
      $scope.items = sellerItems;
      $scope.itemIndex = 0;
    }, function(err){
      console.log("error retrieving items");
    });  
  };

  
});
