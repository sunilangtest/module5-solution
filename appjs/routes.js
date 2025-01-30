(function(){
  'use script';

  angular.module('usermgt')
  .config(RoutesConfig);

  RoutesConfig.$inject=['$stateProvider','$urlRouterProvider'];
  function RoutesConfig($stateProvider,$urlRouterProvider){
    $urlRouterProvider.otherwise('/');

    $stateProvider
    .state('home',{
      url:'/',
      templateUrl:'home.html'
    })
    .state('myinfo',{
      url:'/myinfo',
      templateUrl:'src/myinfo.html',
      controller:'MyinfoController as myinfo',
      resolve:{
        items:['MenuDataService',function(MenuDataService){
          return JSON.parse(localStorage.getItem('task'));
        }]
      }
    })
    .state('signup',{
        url:'/signup',
        templateUrl:'src/signup.html',
    })
  }
})();
