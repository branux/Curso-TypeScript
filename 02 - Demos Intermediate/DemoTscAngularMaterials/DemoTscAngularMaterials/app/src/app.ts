namespace ContatManagerApp {
    angular
        .module("contactManagerApp", ["ngMaterial", "ngMdIcons"])
        .config(($mdIconProvider: angular.material.IIconProvider,
            $mdThemingProvider: angular.material.IThemingProvider) => {
            $mdIconProvider.icon("menu", "./assets/svg/menu.svg", 24);

            $mdThemingProvider.theme('default')
                .primaryPalette('blue')
                .accentPalette('red');
        });
}