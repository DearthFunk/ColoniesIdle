angular.module('directiveClickTimer', [])

	.directive('clickTimer', function ($rootScope,$timeout) {
		return {
			restrict:'C',
			templateUrl:'directives/clickTimer/clickTimer.html',
			replace: true,
			scope: {
				itemValue: "=itemValue",
				width: "=width",
				autoStart: "=autoStart"
			},
			link: function(scope) {
				if (scope.itemValue.production != undefined && scope.itemValue.active) {

					var running = false;
					var speed = 100;

					scope.autoClickCount = 0;
					scope.backgroundPos = 0;

					var timer = function() {

						scope.backgroundPos += (scope.width/100);
						if (scope.backgroundPos >= scope.width) {
							scope.autoClickCount++;



							scope.itemValue.accumulated += scope.itemValue.production.perInterval;
							scope.backgroundPos = 0;
							if (scope.autoClickCount == scope.itemValue.production.accumulator) {
								console.log('stop');
								running = false;
								scope.backgroundPos = scope.width;
								$timeout.cancel(timer);
							}
						}
						if (scope.autoClickCount != scope.itemValue.production.accumulator) {
							$timeout(timer, speed);
						}

					};

					scope.startTimer = function() {
						scope.autoClickCount = 0;
						scope.backgroundPos = 0;
						if (scope.itemValue.accumulated > 0) {
							$rootScope.$broadcast('notify',"You harvested " + scope.itemValue.accumulated + " " + scope.itemValue.name); }
						scope.itemValue.total += scope.itemValue.accumulated;
						scope.itemValue.accumulated = 0;
						if (!running) {
							running = true;
							$timeout(timer, speed);
						}
					};

					if (scope.autoStart){scope.startTimer();}




				}
			}
		}
	});