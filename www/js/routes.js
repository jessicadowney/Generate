angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
    
  

      .state('createANewWiFiNetwork', {
    url: '/page1',
    templateUrl: 'templates/createANewWiFiNetwork.html',
    controller: 'createANewWiFiNetworkCtrl'
  })

  .state('homeWifi9792Created', {
    url: '/page3',
    templateUrl: 'templates/homeWifi9792Created.html',
    controller: 'homeWifi9792CreatedCtrl'
  })

$urlRouterProvider.otherwise('/page1')

  

});