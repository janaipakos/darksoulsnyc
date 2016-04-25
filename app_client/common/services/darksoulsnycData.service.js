(function() {

  angular
    .module('darksoulsnycApp')
    .service('darksoulsnycData', darksoulsnycData);

  darksoulsnycData.$inject = ['$http'];
  function darksoulsnycData ($http) {
    var locationByCoords = function (lat, lng) {
      return $http.get('/api/locations?lng=' + lng + '&lat=' + lat + '&maxDistance=2000000');
    };

    var locationById = function (locationid) {
      return $http.get('/api/locations/' + locationid);
    };

    var addReviewById = function (locationid, data) {
      return $http.post('/api/locations/' + locationid + '/reviews', data);
    };

    return {
      locationByCoords : locationByCoords,
      locationById : locationById,
      addReviewById : addReviewById
    };
  }

})();
