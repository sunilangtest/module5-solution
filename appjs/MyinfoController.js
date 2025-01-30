(function(){
  'use strict';

  angular.module('usermgt')
  .controller('MyinfoController',MyinfoController);

  MyinfoController.$inject=['items'];
  function MyinfoController(items){
    var $ctrl=this;
    $ctrl.items=items;
    if(items != null){
      $ctrl.allowsignup=false;
    }
    else {
        $ctrl.allowsignup=true;
    }
  }
})()
