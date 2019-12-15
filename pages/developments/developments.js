angular.module('pageDevelopments', [])

	.directive('developments', function () {
		return {
			restrict:'C',
			templateUrl:'pages/developments/developments.html',
			replace: true,
			scope: {
				itemValue: "=itemValue"
			},
			link: function(scope) {

			}
		}
	});