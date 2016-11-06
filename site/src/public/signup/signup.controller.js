(function() {
'use strict'

angular.module('public')
.controller('SignupController',SignupController);

SignupController.$inject=['MenuService'];
function SignupController(MenuService) {
  var sctrl=this;

  sctrl.shortName = "";



    sctrl.submit = function () {
      MenuService.getFavItem(sctrl.shortName)
          .then(function (response) {
            var items = response.data;
            sctrl.user.item_name = items.name;
            sctrl.user.item_desc= items.description;

            if (items.image_present) {
              sctrl.user.item_img= sctrl.shortName;
            }
              MenuService.setInfo(sctrl.user);
              sctrl.success = true;
              sctrl.nogo=false;
          })
          .catch(function (error) {
             sctrl.nogo = true;
             sctrl.shortName = "";
          });
    };
}

})();
