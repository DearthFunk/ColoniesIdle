angular.module('directiveProductionMultiplier', [])

	.directive('productionMultiplier', function () {
		return {
			restrict:'C',
			templateUrl:'tester/productionMultiplier/productionMultiplier.html',
			replace: true,
			scope: {
				itemValue: "=itemValue"
			},
			link: function(scope) {

				scope.plusOne = function(item) {
					item = item + 1;
				};

			}
		}
	});