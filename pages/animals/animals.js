angular.module('pageAnimals', [])

	.directive('animals', function () {
		return {
			restrict:'C',
			templateUrl:'pages/animals/animals.html',
			replace: true,
			scope: {
				itemValue: "=itemValue"
			},
			link: function(scope) {

			}
		}
	});