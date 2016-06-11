var ContatManagerApp;
(function (ContatManagerApp) {
    var MainController = (function () {
        function MainController(message) {
            this.message = message;
            this.message = "Olá do MainController";
        }
        MainController.$inject = [];
        return MainController;
    }());
    angular
        .module("contactManagerApp")
        .controller("mainController", MainController);
})(ContatManagerApp || (ContatManagerApp = {}));
//# sourceMappingURL=mainController.js.map