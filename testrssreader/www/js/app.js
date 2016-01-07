// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
var app = angular.module('starter', ['ionic'])

app.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    if(window.cordova && window.cordova.plugins.Keyboard) {
      // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
      // for form inputs)
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);

      // Don't remove this line unless you know what you are doing. It stops the viewport
      // from snapping when text inputs are focused. Ionic handles this internally for
      // a much nicer keyboard experience.
      cordova.plugins.Keyboard.disableScroll(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
});

app.controller('simpleFeedCtrl', function ($scope, $http) {
  
  $scope.posts = [];
  
  var url= "http://vnexpress.net/rss/tin-moi-nhat.rss";
  var google_converter="https://ajax.googleapis.com/ajax/services/feed/load?v=2.0&num=10&callback=JSON_CALLBACK&q=";
  
  $http.jsonp(google_converter+ encodeURIComponent(url))
    .success(function(res){
    console.log(res);
    
    $scope.posts = res.responseData.feed.entries ;
   
  });
  
   $scope.openLink = function(url) {
      window.open(url, '_system');
    }  
});
