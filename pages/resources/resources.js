angular.module('pageResources', [])

	.directive('resources', function () {
		return {
			restrict:'C',
			templateUrl:'pages/resources/resources.html',
			replace: true,
			scope: {
				itemValue: "=itemValue"
			},
			link: function(scope) {





			}
		}
	});