angular.module('pageMap', [])

	.directive('map', function () {
		return {
			restrict:'C',
			templateUrl:'pages/map/map.html',
			replace: true,
			scope: {
				itemValue: "=itemValue"
			},
			link: function(scope) {

			}
		}
	});