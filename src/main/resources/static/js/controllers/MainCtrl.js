'use strict;'

angular.module('MainCtrl', []).controller('MainController',
    ['$scope', 'googleMap', function($scope, googleMap) {
    
    getGeocodeForAddr("10 Downing Street, London");
    	
    function getGeocodeForAddr(addr) {
        return googleMap.geocode({address: addr}, function(resp) {
        }, function(err) {
        	console.log(err);
        }).$promise;
    }
}]);
