var routerApp = angular.module('routerApp', [ 'ui.router']);

routerApp.config(function($stateProvider, $urlRouterProvider) {

	$urlRouterProvider.otherwise('/home');

	$stateProvider

	// HOME STATES AND NESTED VIEWS ========================================
	.state('home', {
		url : '/home',
		templateUrl : 'view/partial-home.html',
		controller: 'loginControl'
	}).
	state('about', {
		url : '/about',
		templateUrl : 'view/about-home.html',
		controller:'SampleController1'

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