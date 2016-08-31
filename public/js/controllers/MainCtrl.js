angular.module('MainCtrl', []).controller('MainController', function($scope, $http) {

	$scope.tagline = 'To the moon and back!';
	$scope.saveCandidate = function() {
		console.log('saving cand');
		$http.post('/candidate', {
			name: 'Trevor',
			clientName: 'Egen',
			payRate: 32,
			startDate: '01/01/2016',
			isSixMonthsOrMore: true,
			billRate: 39,
			phone: 1111111111,
			email: 'mnfjn@ds.com'
		}).then(function (res) {
			console.log('candidate saved', res);
		});
	};

	$scope.getAllCandidates = function () {
		$http.get('/candidate/all').then(function (res) {
			$scope.candidates = res.data;
		});
	};

});