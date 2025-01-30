(function(){
'use strict';
angular.module('usermgt')
.controller('SignupController',SignupController);

SignupController.$inject=['MenuDataService'];
function SignupController(MenuDataService){
  var reg=this;
  reg.menumessage=null;
  reg.submit=function()
  {
        reg.completed=true;

      if(reg.user.menunumber !="" && reg.user.menunumber != undefined)
      {
          localStorage.setItem('task',JSON.stringify(reg.user))
          alert('Your information has been saved');
      }
      else  {
          reg.menumessage="No such menu number exists";
      }

    }
  }
})();
