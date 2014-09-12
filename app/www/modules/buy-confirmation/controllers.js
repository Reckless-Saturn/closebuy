angular.module('buyconfirm', ['buybrowse.services'])

.controller('ConfirmController', function($scope, BuyItems, $state, ContactSeller) {
  $scope.bought = false;
  $scope.interestedItemId = BuyItems.interestedItemId;
  
  var pubnub;
  pubnub = PUBNUB.init({
    publish_key: 'pub-c-2c4e8ddb-7e65-4123-af2d-ef60485170d4',
    subscribe_key: 'sub-c-693a352e-3394-11e4-9846-02ee2ddab7fe'
  });

  $scope.confirmPurchase = function(){
    console.log("before publish");
    pubnub.publish({
      channel: '1a',
      message: "send purchase message"
    });
    
    //mark the item as purchased
    BuyItems.markItemAsPurchased($scope.interestedItemId);
    //setting bought to true disables the buy button and 
    //displays a thank you message
    $scope.bought = true;
    // setTimeout(function() {
    //   $state.go('tab.buybrowse');
    // }, 2000);
  };

  $scope.transaction = function(){
    console.log("before publish");
    pubnub.publish({
      channel: '1a',
      message: "send purchase message"
    });
    // console.log('transaction invoked');
    $state.go('tab.buytransaction');
  };

  $scope.contactSeller = ContactSeller.contactSeller;

});