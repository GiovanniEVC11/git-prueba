var pm = angular.module('PrimerModulo');

pm.component('advertisingList', {  // This name is what AngularJS uses to match to the `<advertising-list>` element.
    template:
        '<aside>' +
          '<h2> Publicidad (Componente) </h2>' +
          '<ul>' +
            '<li ng-repeat="phone in $ctrl.phones">' +
              '<span>{{phone.name}}</span>' +
              '<p>{{phone.snippet}}</p>' +
            '</li>' +
          '</ul>' +
        '</aside>' ,
    controller: function PhoneListController() {
      this.phones = [
        {
          name: 'Nexus S',
          snippet: 'Fast just got faster with Nexus S.'
        }, {
          name: 'Motorola XOOM™ with Wi-Fi',
          snippet: 'The Next, Next Generation tablet.'
        }, {
          name: 'MOTOROLA XOOM™',
          snippet: 'The Next, Next Generation tablet.'
        }
      ];
    }
});
