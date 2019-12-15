angular.module('testerModule', [])

	.directive('tester', function (valService) {
		return {
			restrict:'C',
			templateUrl:'tester/tester.html',
			replace: true,
			link: function(scope) {

				scope.values = valService.vals;

			}
		}
	});