export class PopupController {

    constructor($scope,$uibModal) {
        'ngInject';

        var $uibModalInstance = $scope.open = function () {
            $uibModal.open({
              templateUrl: 'app/components/popup/popup_checkout.html'
          });
        };

        $scope.cancel = function () {
            $uibModalInstance.dismiss('cancel');
            $uibModalInstance.close();
        };

    }

}
