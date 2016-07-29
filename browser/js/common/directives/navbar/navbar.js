app.directive('navbar', function ($rootScope, $state) {

    return {
        restrict: 'E',
        scope: {},
        templateUrl: 'js/common/directives/navbar/navbar.html',
        controller: 'NavbarCtrl',
        link: function (scope) {

            scope.items = [
                { label: 'Home', state: 'home' }
            ];


        }

    };

});
