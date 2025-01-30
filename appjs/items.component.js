(function(){
  'use strict';

  angular.module('usermgt')
  .component('viewInfo',{
    templateUrl:'src/viewinfo.html',
    bindings:{
      items:'<'
    }
  });
})();
