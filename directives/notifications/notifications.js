angular.module('directiveNotifications', [])

	.directive('notifications', function (valService, $rootScope) {
		return {
			restrict:'C',
			templateUrl:'directives/notifications/notifications.html',
			replace: true,
			link: function(scope) {

				var index = 0;

				scope.notificationList = [];
				scope.valService  = valService;
				scope.$on('notify', function(event,msg) {
					scope.notificationList.splice(0,0,msg);
				});





				function starter() {
					var timer = setInterval(function(){
						$rootScope.$broadcast('notify',openingMessages[index]);
						scope.$apply();
						index++;
						if (index >= openingMessages.length) {
							valService.vals.itemGroups.resources.active = true;
							valService.vals.itemGroups.resources.selected = true;
							valService.vals.itemGroups.resources.items.wood.active = true;
							clearInterval(timer);
						}
					},1000);
				}
				starter();

			}
		}
	});