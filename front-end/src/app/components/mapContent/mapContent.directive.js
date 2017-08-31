export function MapContentDirective() {
  'ngInject';

  let directive = {
    restrict: 'E',
    templateUrl: 'app/components/mapContent/mapContent.html',
    scope: {
    },
    controller: MapContentController,
    controllerAs: 'vm',
    bindToController: true
  };

  return directive;
}

class MapContentController {
  constructor () {
    'ngInject';

  }
}
