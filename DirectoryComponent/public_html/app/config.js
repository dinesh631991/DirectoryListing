/**
 * Created by dines on 1/1/2017.
 */
require.config({
    baseUrl : 'app',

    paths : {
        'angular' : 'js/library/angular/angular',
        'angularAMD' : 'js/library/angularAMD/angularAMD',
        'angular-route' : 'js/library/angular-route'
    },

    shim : {
        'angularAMD' : ['angular'],
        'angular-route' : ['angular']
    },

    deps : ['app']
});
