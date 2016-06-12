var ContatManagerApp;
(function (ContatManagerApp) {
    angular
        .module("contactManagerApp", ["ngMaterial", "ngMdIcons"])
        .config(function ($mdIconProvider, $mdThemingProvider) {
        $mdIconProvider.icon("menu", "./assets/svg/menu.svg", 24);
        $mdThemingProvider.theme('default')
            .primaryPalette('blue')
            .accentPalette('red');
    });
})(ContatManagerApp || (ContatManagerApp = {}));
//# sourceMappingURL=app.js.map