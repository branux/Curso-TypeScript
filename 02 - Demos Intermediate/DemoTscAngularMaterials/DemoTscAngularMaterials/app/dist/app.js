var ContactManagerApp;
(function (ContactManagerApp) {
    angular
        .module("contactManagerApp", ["ngMaterial", "ngMdIcons", "ngMessages"])
        .config(function ($mdIconProvider, $mdThemingProvider) {
        $mdIconProvider.defaultIconSet("./assets/svg/avatars.svg", 128);
        $mdIconProvider
            .icon("menu", "./assets/svg/menu.svg", 24)
            .icon("google_plus", "./assets/svg/google_plus.svg", 512)
            .icon("hangouts", "./assets/svg/hangouts.svg", 512)
            .icon("twitter", "./assets/svg/twitter.svg", 512)
            .icon("phone", "./assets/svg/phone.svg", 512);
        $mdThemingProvider.theme('default')
            .primaryPalette('green')
            .accentPalette('red');
        //var user = new ContactManagerApp.Cliente(1, "Fabiano");
    });
})(ContactManagerApp || (ContactManagerApp = {}));
//# sourceMappingURL=app.js.map