(function(){
'use strict';
angular.module('usermgt')
.controller('SignupController',SignupController);

SignupController.$inject=['MenuDataService','$location'];
function SignupController(MenuDataService,$location){
  var reg=this;
  reg.menumessage=null;
  reg.submit=function()
  {
        reg.completed=true;

      if(reg.user.menunumber !="" && reg.user.menunumber != undefined)
      {
          localStorage.setItem('task',JSON.stringify(reg.user))
          alert('Your information has been saved');
          $location.path("/myinfo");
      }
      else  {
          reg.menumessage="No such menu number exists";
          alert('No such menu number exists');
      }

    }
  }
})();
