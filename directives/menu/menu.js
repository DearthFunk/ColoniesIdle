angular.module('directiveMenu', [])

	.directive('menu', function (valService) {
		return {
			restrict:'C',
			templateUrl:'directives/menu/menu.html',
			replace: true,
			scope: {
				items: "=items",
				showPopover: "=showPopover"
			},
			link: function(scope) {

				scope.values = valService.vals;

				scope.selectMenuItem = function(which) {
					for (var x in scope.items) {
						scope.items[x].selected = false;
					}
					which.selected = true;
				};
			}
		}
	});