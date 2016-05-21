(function() {
	'use strict';

	angular.module('authApp')
	.controller('UserController', UserController);

	function UserController($http, $auth, $rootScope, $state) {
		var vm = this;
		var toggle = false;

		vm.users;
		vm.error;

		vm.getUsers = function() {
			// This request will hit the index method in the AuthenticateController
			// on the Laravel side and will return the list of users
			if (toggle === false) {
				$http.get('api/authenticate').success(function(users) {
					vm.users = users;
					toggle = true;
				}).error(function(error) {
					vm.error = error;
				});
			} else {
				vm.users = "";
				toggle = false;
			}
		};

		// We would normally put the logout method in the same
		// spot as the login method, ideally extracted out into
		//  a service, For this simpler example we'll leave it here
		vm.logout = function() {
			$auth.logout().then(function() {
				// Remove the authenticated user from local storage
				localStorage.removeItem('user');

				// Flip authenticated to false so that we no longer
				// show UI elements dependant on the user being logged in
				$rootScope.authenticated = false;

				// Remove the current user info from rootScope
				$rootScope.currentUser = null;

				$state.go('auth');
			});
		};

		vm.test = function() {
			$state.go('test');
		};
	}
})();