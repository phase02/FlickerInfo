var routerApp = angular.module('routerApp', [ 'ui.router']);

routerApp.config(function($stateProvider, $urlRouterProvider) {

	$urlRouterProvider.otherwise('/home');

	$stateProvider

	// HOME STATES AND NESTED VIEWS ========================================
	.state('home', {
		url : '/home',
		templateUrl : 'partial-home.html',
		controller: 'loginControl'
	}).
	state('about', {
		url : '/about',
		templateUrl : 'about-home.html',
		controller : 'SampleController'

	});

});

routerApp.factory('userService', function() {
	 var savedData = [];
	 function set(data) {
	   savedData = data;
	 }
	 function get() {
	  return savedData;
	 }

	 return {
	  set: set,
	  get: get
	 }

	});