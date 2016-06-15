namespace ContactManagerApp {
    angular
        .module("contactManagerApp", ["ngMaterial", "ngMdIcons", "ngMessages"])
        .config(($mdIconProvider: angular.material.IIconProvider,
            $mdThemingProvider: angular.material.IThemingProvider) => {
            $mdIconProvider.defaultIconSet("./assets/svg/avatars.svg", 128);
            $mdIconProvider
                .icon("menu", "./assets/svg/menu.svg", 24)
                .icon("google_plus", "./assets/svg/google_plus.svg", 512)
                .icon("hangouts", "./assets/svg/hangouts.svg", 512)
                .icon("twitter", "./assets/svg/twitter.svg", 512)
                .icon("phone", "./assets/svg/phone.svg", 512);

            $mdThemingProvider.theme('default')
                //.dark();
                .primaryPalette('green')
                .accentPalette('red');

            //var user = new ContactManagerApp.Cliente(1, "Fabiano");
        });
}