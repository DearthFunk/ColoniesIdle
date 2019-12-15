angular.module('directiveTable', [])

	.directive('table', function () {
		return {
			restrict:'C',
			templateUrl:'directives/table/table.html',
			replace: true,
			scope: {
				itemValue: "=itemValue"
			},
			link: function(scope) {



			}
		}
	});