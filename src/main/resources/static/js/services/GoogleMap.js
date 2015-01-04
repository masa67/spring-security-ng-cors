'use strict';

angular
    .module('GoogleMapService', ['GoogleMapService'])
    .factory('googleMap', ['$resource', function($resource) {

        return $resource('', {}, {
            geocode: {method: 'GET', url: 'http://maps.googleapis.com/maps/api/geocode/json?', isArray: false, withCredentials: false},
            });
}]);
