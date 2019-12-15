angular.module('colonies', [
	"pages",
	"testerModule",
	"serviceValService",

	"filterConditional",
	"filterOrderObjectBy",

	"directiveClickTimer",
	"directiveChangeControls",
	"directiveProductionMultiplier",
	"directiveMenu",
	"directiveNotifications",
	"directivePurchaseButton",
	"directiveTable"

]);

function myController($scope,$rootScope,valService){

	$scope.values = valService.vals;



	$scope.showTester = false;

	$scope.$watch('values',function(){
		if ($scope.values.itemGroups.resources.items.wood.total >= 20 && !$scope.values.itemGroups.developments.items.hut.active) {
			$scope.values.itemGroups.developments.active = true;
			$scope.values.itemGroups.developments.items.hut.active = true;
			$rootScope.$broadcast('notify',"Lucky Devil! You harvested more than 20 wood and can now build yourself a hut... Yeay... A Stupid Hut...");
		}
		if ($scope.values.itemGroups.developments.items.hut.total >= 3 && !$scope.values.itemGroups.wishingWell.items[0].active) {
			$scope.values.itemGroups.wishingWell.active = true;
			$scope.values.itemGroups.wishingWell.items[0].active = true;
			$rootScope.$broadcast('notify',"3 Huts built into a triangle, the ground between starts to seperate, a cold chill is in the air. POOF! A wishing well appears in the middle!");
		}

	},true);
}