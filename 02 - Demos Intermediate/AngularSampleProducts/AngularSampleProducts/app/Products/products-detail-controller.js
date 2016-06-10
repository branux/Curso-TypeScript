var prodapp;
(function (prodapp) {
    var controllers;
    (function (controllers) {
        var productsdetail;
        (function (productsdetail) {
            var ProductDetailController = (function () {
                function ProductDetailController($routeParams, dataAccessService) {
                    var _this = this;
                    this.$routeParams = $routeParams;
                    this.dataAccessService = dataAccessService;
                    this.title = 'Produto - Detalhe';
                    var productResource = dataAccessService.getProductResource();
                    productResource.get({ productId: $routeParams.productId }, function (data) {
                        _this.product = data;
                    });
                }
                ProductDetailController.$inject = ["$routeParams", "dataAccessService"];
                return ProductDetailController;
            }());
            angular
                .module('prodapp')
                .controller('ProductDetailController', ProductDetailController);
        })(productsdetail = controllers.productsdetail || (controllers.productsdetail = {}));
    })(controllers = prodapp.controllers || (prodapp.controllers = {}));
})(prodapp || (prodapp = {}));
//# sourceMappingURL=products-detail-controller.js.map