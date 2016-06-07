/// <reference path="../typings/knockout/knockout.d.ts" />
var demo_ambienteDeclarations;
(function (demo_ambienteDeclarations) {
    var name = ko.observable('Fabiano Nalin');
    var id = ko.observable(1);
    var guy = { id: id, fullName: name };
    var value = guy.fullName();
    console.log(value);
})(demo_ambienteDeclarations || (demo_ambienteDeclarations = {}));
