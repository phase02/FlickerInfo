var routerApp = angular.module('routerApp', [ 'ui.router' ]);

routerApp.config(function($stateProvider, $urlRouterProvider) {

	$urlRouterProvider.otherwise('/home');

	$stateProvider

	// HOME STATES AND NESTED VIEWS ========================================
	.state('home', {
		url : '/home',
		templateUrl : 'partial-home.html',
		controller: 'SampleController'
	}).state('home.list', {
		url : '/list',
		templateUrl : 'partial-home-list.html',
		controller : 'SampleController1'
	}).state('home.name', {
		url : '/name?listId&description',
		templateUrl : 'details.html',
		controller : 'SampleController1'
	}).

	state('home.phone', {
		url : '/phone/:phoneId',
		templateUrl : 'details.html',
		controller : 'SampleController1'
	})

	.state('about', {
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