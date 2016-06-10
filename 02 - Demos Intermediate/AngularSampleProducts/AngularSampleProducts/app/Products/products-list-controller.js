var prodapp;
(function (prodapp) {
    var controllers;
    (function (controllers) {
        var productslist;
        (function (productslist) {
            var ProductsListController = (function () {
                function ProductsListController(dataAccessService) {
                    var _this = this;
                    this.dataAccessService = dataAccessService;
                    this.title = 'Listagem de Produtos';
                    this.showImage = false;
                    this.products = [];
                    var productResource = dataAccessService.getProductResource();
                    productResource.query(function (data) {
                        _this.products = data;
                    });
                }
                ProductsListController.prototype.toggleImage = function () {
                    this.showImage = !this.showImage;
                };
                ProductsListController.$inject = ['dataAccessService'];
                return ProductsListController;
            }());
            angular
                .module('prodapp')
                .controller('ProductsListController', ProductsListController);
        })(productslist = controllers.productslist || (controllers.productslist = {}));
    })(controllers = prodapp.controllers || (prodapp.controllers = {}));
})(prodapp || (prodapp = {}));
//# sourceMappingURL=products-list-controller.js.map