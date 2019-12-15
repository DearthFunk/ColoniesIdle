angular.module('pagesWishingWell', [])

	.directive('wishingWell', function () {
		return {
			restrict:'C',
			templateUrl:'pages/wishingWell/wishingWell.html',
			replace: true,
			scope: {
				itemValue: "=itemValue"
			},
			link: function(scope) {

			}
		}
	});