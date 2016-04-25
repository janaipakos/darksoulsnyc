(function () {

  angular
    .module('darksoulsnycApp')
    .controller('aboutCtrl', aboutCtrl);

  function aboutCtrl() {
    var vm = this;

    vm.pageHeader = {
      title: 'About Dark Souls NYC'
    };
    vm.main = {
      content: 'Dark Souls NYC was created to help users think about the world of Lordran and its inhabitants in a contemporary way. Edits and pull requests are welcome but please do not spam -_-'
    };
  }

})();
