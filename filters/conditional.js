angular.module('filterConditional', [])

	.filter('conditional', function() {
		return function(condition, ifTrue, ifFalse) {
			return condition ? ifTrue : ifFalse;
		};
	});