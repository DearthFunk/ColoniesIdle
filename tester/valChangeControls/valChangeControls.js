angular.module('directiveChangeControls', [])

	.directive('valChangeControls', function (valService) {
		return {
			restrict:'C',
			templateUrl:'tester/valChangeControls/valChangeControls.html',
			replace: true,
			scope: {
				itemValue: "=itemValue"
			},
			link: function(scope) {

				scope.changeValue = function(amount) {
					if (scope.itemValue.total + amount >= 0){
						scope.itemValue.total += amount;
					}
				};

			}
		}
	});