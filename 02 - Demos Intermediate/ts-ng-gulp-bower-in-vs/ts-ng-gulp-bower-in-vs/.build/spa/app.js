var app;!function(t){var e=function(){function t(t){t.when("/",{templateUrl:"/app/posts/list.html",controller:"PostsCtrl as vm"}).when("/edit/:id",{templateUrl:"/app/posts/edit.html",controller:"PostEditCtrl as vm"}).when("/add",{templateUrl:"/app/posts/add.html",controller:"PostAddCtrl as vm"}).otherwise({redirectTo:"/"})}return t}();e.$inject=["$routeProvider"];var n=angular.module("chsakellBlogApp",["ngRoute"]);n.config(e)}(app||(app={}));var app;!function(t){var e;!function(t){var e=function(){function t(t,e,n){this.$location=t,this.constantService=e,this.dataService=n}return t.prototype.add=function(){var t=this;this.dataService.add(this.constantService.apiPostURI,this.post).then(function(e){alert(e.Title+" submitted successfully"),t.$location.path("/")})},t.$inject=["$location","constantService","dataService"],t}();angular.module("chsakellBlogApp").controller("PostAddCtrl",e)}(e=t.postAdd||(t.postAdd={}))}(app||(app={}));var app;!function(t){var e;!function(t){var e=function(){function t(t,e,n,o){var i=this;this.$routeParams=t,this.$location=e,this.constantService=n,this.dataService=o,this.postId=t.id,o.getSingle(this.constantService.apiPostURI+this.postId).then(function(t){i.post=t})}return t.prototype.update=function(){var t=this;this.dataService.update(this.constantService.apiPostURI+this.postId,this.post).then(function(e){t.$location.path("/")})},t.$inject=["$routeParams","$location","constantService","dataService"],t}();angular.module("chsakellBlogApp").controller("PostEditCtrl",e)}(e=t.postEdit||(t.postEdit={}))}(app||(app={}));var app;!function(t){var e;!function(t){var e=function(){function t(t,e){this.constantService=t,this.dataService=e,this.getPosts()}return t.prototype.remove=function(t){var e=this;this.dataService.remove(this.constantService.apiPostURI+t).then(function(t){e.getPosts()})},t.prototype.getPosts=function(){var t=this;this.dataService.get(this.constantService.apiPostURI).then(function(e){t.posts=e})},t.$inject=["constantService","dataService"],t}();angular.module("chsakellBlogApp").controller("PostsCtrl",e)}(e=t.postList||(t.postList={}))}(app||(app={}));var app;!function(t){var e;!function(t){var e;!function(t){var e=function(){function t(){this.apiPostURI="/api/posts/"}return t}();t.ConstantService=e,angular.module("chsakellBlogApp").service("constantService",e)}(e=t.services||(t.services={}))}(e=t.common||(t.common={}))}(app||(app={}));var app;!function(t){var e;!function(t){var e;!function(t){var e=function(){function t(t,e){this.httpService=t,this.qService=e}return t.prototype.get=function(t){var e=this,n=e.qService.defer();return e.httpService.get(t).then(function(t){n.resolve(t.data)},function(t){n.reject(t)}),n.promise},t.prototype.getSingle=function(t){var e=this,n=e.qService.defer();return e.httpService.get(t).then(function(t){n.resolve(t.data)},function(t){n.reject(t)}),n.promise},t.prototype.add=function(t,e){var n=this,o=n.qService.defer();return n.httpService.post(t,e).then(function(t){o.resolve(t.data)},function(t){o.reject(t)}),o.promise},t.prototype.update=function(t,e){var n=this,o=n.qService.defer();return n.httpService.put(t,e).then(function(t){o.resolve(t)},function(t){o.reject(t)}),o.promise},t.prototype.remove=function(t){var e=this,n=e.qService.defer();return e.httpService["delete"](t).then(function(t){n.resolve(t)},function(t){n.reject(t)}),n.promise},t.$inject=["$http","$q"],t}();t.DataService=e,angular.module("chsakellBlogApp").service("dataService",e)}(e=t.services||(t.services={}))}(e=t.common||(t.common={}))}(app||(app={}));