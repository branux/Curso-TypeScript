namespace prodapp.controllers.productsdetail {
    interface IProductDetailModel {
        title: string;
        product: prodapp.domain.IProduct;
    }

    interface IProductParams extends ng.route.IRouteParamsService {
        productId: number;
    }

    class ProductDetailController implements IProductDetailModel {
        title: string;
        product: prodapp.domain.IProduct;

        static $inject = ["$routeParams", "dataAccessService"];
        constructor(private $routeParams: IProductParams, private dataAccessService: prodapp.common.DataAccessService) {
            this.title = 'Produto - Detalhe';

            var productResource = dataAccessService.getProductResource();
            productResource.get(
                { productId: $routeParams.productId },
                (data: prodapp.domain.IProduct) => {
                    this.product = data;
                }
            );
        }

    }

    angular
        .module('prodapp')
        .controller('ProductDetailController', ProductDetailController);
}