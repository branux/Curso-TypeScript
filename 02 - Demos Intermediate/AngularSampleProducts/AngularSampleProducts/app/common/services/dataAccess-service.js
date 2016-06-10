var prodapp;
(function (prodapp) {
    var common;
    (function (common) {
        var DataAccessService = (function () {
            function DataAccessService($resource) {
                this.$resource = $resource;
            }
            DataAccessService.prototype.getProductResource = function () {
                return this.$resource('/api/products/:productId');
            };
            DataAccessService.$inject = ['$resource'];
            return DataAccessService;
        }());
        common.DataAccessService = DataAccessService;
        angular
            .module('common.service')
            .service('dataAccessService', DataAccessService);
    })(common = prodapp.common || (prodapp.common = {}));
})(prodapp || (prodapp = {}));
//# sourceMappingURL=dataAccess-service.js.map