angular.module('directivePurchaseButton', [])

	.directive('purchaseButton', function (valService, $rootScope) {
		return {
			restrict:'C',
			templateUrl:'directives/purchaseButton/purchaseButton.html',
			replace: true,
			scope: {
				itemValue: "=itemValue"
			},
			link: function(scope) {
				scope.purchase = function() {
					if (scope.itemValue.cost != undefined) {

						var toSubtract = [];
						var check = 0;

						for (var x in valService.vals.itemGroups) {
							var groupType = valService.vals.itemGroups[x].items;
							for (var entry in groupType) {
								for (var i = 0; i < scope.itemValue.cost.length; i++) {
									for (var prop in scope.itemValue.cost[i]) {
										if( entry == prop && groupType[entry].total >= scope.itemValue.cost[i][prop]) {
											check++;
											toSubtract.push(entry);
										}

									}
								}
							}
						}
						if (check >= scope.itemValue.cost.length) {
							for (var x in valService.vals.itemGroups) {
								var groupType = valService.vals.itemGroups[x].items;
								for (var entry in groupType) {
									for (var i = 0; i < scope.itemValue.cost.length; i++) {
										for (var prop in scope.itemValue.cost[i]) {
											if (prop == entry) {
												groupType[entry].total -= scope.itemValue.cost[i][prop];
											}

										}
									}
								}
							}
							scope.itemValue.total++;
							$rootScope.$broadcast('notify',"You built a " + scope.itemValue.name);
						}
						else {
							$rootScope.$broadcast('notify',"You can't offord this, get a job!");
						}
					}
					else {console.log("Purchase Button Used, but no cost associated to ",scope.itemValue);}
				};

			}
		}
	});