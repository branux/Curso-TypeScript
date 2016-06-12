namespace ContatManagerApp {

    class MainController {

        users: ContactManagerApp.User[] = [];
        message: string = "Olá do MainController";

        static $inject = ["userService", "$mdSidenav"];
        constructor(private userService: ContactManagerApp.IUserService,
            private $mdSidenav: angular.material.ISidenavService) {
            var self = this;

            this.userService.loadAllUsers().then((users: ContactManagerApp.User[]) => {
                self.users = users;
                console.log(self.users);
            });
        }

        toggleSideNav(): void {
            this.$mdSidenav("left").toggle();
        }

    }

    angular
        .module("contactManagerApp")
        .controller("mainController", MainController);
}