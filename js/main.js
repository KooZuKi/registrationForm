angular.module('myApp', [])
	.controller('SignUpController', function($scope) {
		$scope.userdata = {};

		$scope.submitForm = function() {
			console.log($scope.userdata);
			if($scope.signUpForm.$invalid){
					alert("please verify your info and submit again");
				} else {
					alert("You have registered your account.");
				}
			
		}
	})

	// .directive('compare', function() {
	// 	var o = {};
	// 	o.strict = 'AE';
	// 	o.scope = {
	// 		orgText: '=compare'
	// 	}
	// 	o.require = 'ngModel';
	// 	o.link = function(scope, elem, attrs, con)
	// 	{
	// 		con.$validators.compare = function(value)
	// 		{
	// 			return value == scope.orgText;
	// 		}

	// 		scope.$watch('orgText', function() {
	// 			con.$validate();
	// 		})
	// 	}
	// 	return o;
	// })

