var ContatManagerApp;
(function (ContatManagerApp) {
    var MainController = (function () {
        function MainController(userService, $mdSidenav) {
            this.userService = userService;
            this.$mdSidenav = $mdSidenav;
            this.users = [];
            this.message = "Olá do MainController";
            var self = this;
            this.userService.loadAllUsers().then(function (users) {
                self.users = users;
                console.log(self.users);
            });
        }
        MainController.prototype.toggleSideNav = function () {
            this.$mdSidenav("left").toggle();
        };
        MainController.$inject = ["userService", "$mdSidenav"];
        return MainController;
    }());
    angular
        .module("contactManagerApp")
        .controller("mainController", MainController);
})(ContatManagerApp || (ContatManagerApp = {}));
//# sourceMappingURL=mainController.js.map