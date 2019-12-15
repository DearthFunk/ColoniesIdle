angular.module('pageLocations', [])

	.directive('locations', function () {
		return {
			restrict:'C',
			templateUrl:'pages/locations/locations.html',
			replace: true,
			scope: {
				itemValue: "=itemValue"
			},
			link: function(scope) {

			}
		}
	});