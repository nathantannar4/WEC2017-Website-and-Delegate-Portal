Parse.initialize("PuijnT2sgxll68hnu5sjKsDhoKpku51VGt5f1ApB","m3zAPTg45wpzJVKbZq86fycmmP7htZHcUbDZT3NR");

	angular.module('AuthApp', [])
	.run(['$rootScope', function($scope) {
	  $scope.scenario = 'Basic View';
	  $scope.currentUser = Parse.User.current();
	  
	  if (Parse.User.current() == null) window.location = "http://wec2017.ca/DelegatePortal/portal.html";
	  
	  $scope.editProfile = function(form) {
	  	alert("Your profile has been updated");
	  	$scope.scenario = 'Basic View';
	  };

	  $scope.checkForUser = function(form) {
	  	if ($scope.currentUser = null) {

	  	}
	  };
	}]);

jQuery(document).ready(function() {

    Parse.$ = jQuery;
    Parse.initialize("PuijnT2sgxll68hnu5sjKsDhoKpku51VGt5f1ApB","m3zAPTg45wpzJVKbZq86fycmmP7htZHcUbDZT3NR");

    $('.form-logout').on('submit', function (e) {
        // Prevent Default Submit Event
        e.preventDefault();

        console.log("Performing submit");

        //logout current user
        if ( Parse.User.current() ) {
            Parse.User.logOut();

            // check if really logged out
            if (Parse.User.current())
                console.log("Failed to log out!");
        }

        // do redirect
        //window.location.replace("Sign_In.html");
        // or
        window.location.href = "portal.html";
    });
});

$(document).ready(function(){
    $('ul.tabs').tabs();
  });
