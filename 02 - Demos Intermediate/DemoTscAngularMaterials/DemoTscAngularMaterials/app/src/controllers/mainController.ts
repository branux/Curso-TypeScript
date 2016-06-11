namespace ContatManagerApp {

    class MainController {

        static $inject = [];
        constructor(public message: string) {
            this.message = "Olá do MainController";
        }

    }

    angular
        .module("contactManagerApp")
        .controller("mainController", MainController);
}