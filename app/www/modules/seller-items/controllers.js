angular.module('selleritems', [])

.controller('SellerItemsController', function($scope, BuyItems, $state, $q,  $ionicPopup) {
  var pubnub;
  pubnub = PUBNUB.init({
    publish_key: 'pub-c-2c4e8ddb-7e65-4123-af2d-ef60485170d4',
    subscribe_key: 'sub-c-693a352e-3394-11e4-9846-02ee2ddab7fe'
  });
  pubnub.subscribe({
    channel: '1a',
    message: function(message){
      console.log(message);  // For testing purposes
      // Alert customer a restaurant has confirmed them 
      restaurantConfirmation();
    }
  });

  var restaurantConfirmation = function() {
    // Alert using $ionicPopup
    var confirmPopup = $ionicPopup.alert({
      title: 'Purchase Confirmation',
      template: '<center><b> Armando </b><br/> wants your jazz!! </center>',
      okText: 'Let\'s get going!',
      okType: 'button-balanced'
    });
    confirmPopup.then(function(res) {
      console.log('res', res);  // For testing purposes
    });
  };


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
