/// <reference path="../typings/knockout/knockout.d.ts" />
declare var ko: KnockoutStatic;

module demo_ambienteDeclarations {
    var name = ko.observable('Fabiano Nalin');
    var id = ko.observable(1);
    var guy = { id: id, fullName: name };

    var value: string = guy.fullName();
    console.log(value);
}