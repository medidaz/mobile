angular.module('medidaz', ['ionic', 'medidaz.controllers', 'medidaz.services'])

  .run(function ($ionicPlatform) {
    $ionicPlatform.ready(function () {
      if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
        cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
        cordova.plugins.Keyboard.disableScroll(true);

      }
      if (window.StatusBar) {
        // org.apache.cordova.statusbar required
        StatusBar.styleDefault();
      }
    });
  })

  .config(function ($stateProvider, $urlRouterProvider) {

    $stateProvider
      .state('tab', {
        url: '/tab',
        abstract: true,
        templateUrl: 'templates/tabs.html'
      })

      .state('tab.home', {
        url: '/home',
        views: {
          'tab-home': {
            templateUrl: 'templates/tab-home.html',
            controller: 'HomeCtrl'
          }
        }
      })

      .state('tab.consulta', {
        url: '/consulta',
        views: {
          'tab-consulta': {
            templateUrl: 'templates/tab-consulta.html',
            controller: 'ConsultaCtrl'
          }
        }
      })
      
      .state('tab.sugestao', {
        url: '/sugestao',
        views: {
          'tab-sugestao': {
            templateUrl: 'templates/tab-sugestao.html',
            controller: 'SugestaoCtrl'
          }
        }
      });

    $urlRouterProvider.otherwise('/tab/home');
  });