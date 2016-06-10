namespace prodapp.controllers.productslist {
    interface IProductsVM {
        title: string;
        showImage: boolean;
        products: prodapp.domain.IProduct[];
        toggleImage(): void;
    }

    class ProductsListController implements IProductsVM {
        title: string;
        showImage: boolean;
        products: any[];

        static $inject = ['dataAccessService'];
        constructor(private dataAccessService: prodapp.common.DataAccessService) {
            this.title = 'Listagem de Produtos';
            this.showImage = false;
            this.products = [];
            var productResource = dataAccessService.getProductResource();
            productResource.query((data: prodapp.domain.IProduct[]) => {
                this.products = data;
            });
        }

        toggleImage(): void {
            this.showImage = !this.showImage;
        }

    }

    angular
        .module('prodapp')
        .controller('ProductsListController', ProductsListController);
}