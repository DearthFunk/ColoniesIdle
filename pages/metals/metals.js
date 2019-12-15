angular.module('pageMetals', [])

	.directive('metals', function () {
		return {
			restrict:'C',
			templateUrl:'pages/metals/metals.html',
			replace: true,
			scope: {
				itemValue: "=itemValue"
			},
			link: function(scope) {

			}
		}
	});