/**
 * Created by dines on 1/6/2017.
 */

define(['angularAMD', 'angular-route'], function (angularAMD) {
    var app = angular.module('webpp', ['ngRoute']);

    app.config(function ($routeProvider) {
        $routeProvider
            .when("/home", angularAMD.route({
                templateUrl: 'app/partials/home.html',
                controller: 'homeCtrl',
                controllerUrl: 'js/controllers/homeCtrl'
            }))
            .otherwise({redirectTo: "/home"});
    });
    return angularAMD.bootstrap(app);
});