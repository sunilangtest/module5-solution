(function(){
'use script';
angular.module('usermgt')
.service('MenuDataService',MenuDataService)
.constant('ApiBasePath',"https://coursera-jhu-default-rtdb.firebaseio.com");

MenuDataService.$inject=['$http','ApiBasePath']
function MenuDataService($http,ApiBasePath){
var service=this;
service.getItemForCategory=function(categoryShortName){
  var item_api_path=ApiBasePath+"/menu_items/"+categoryShortName+"/menu_items/"+"0.json";
  return $http.get(item_api_path).then(function(response){
    return response.data;
  });
}
}

})();
