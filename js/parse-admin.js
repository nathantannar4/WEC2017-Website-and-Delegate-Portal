Parse.initialize("PuijnT2sgxll68hnu5sjKsDhoKpku51VGt5f1ApB","m3zAPTg45wpzJVKbZq86fycmmP7htZHcUbDZT3NR");

	angular.module('AuthApp', [])
	.run(['$rootScope', function($scope) {
	  $scope.scenario = 'Log in';
	  $scope.currentUser = Parse.User.current();
	  
	  $scope.signUp = function(form) {
	    var user = new Parse.User();
	    user.set("email", form.email);
	    user.set("username", form.username);
	    user.set("password", form.password);
	    
	    user.signUp(null, {
	      success: function(user) {
	        $scope.currentUser = user;
	        $scope.$apply();
	      },
	      error: function(user, error) {
	        alert("Unable to sign up:  " + error.code + " " + error.message);
	      }
	    });    
	  };
	  
	  $scope.logIn = function(form) {
	    Parse.User.logIn(form.username, form.password, {
	      success: function(user) {
	        $scope.currentUser = user;
	        $scope.$apply();
	      },
	      error: function(user, error) {
	        alert("Unable to log in: " + error.code + " " + error.message);
	      }
	    });
	  };
	  
	  $scope.logOut = function(form) {
	    Parse.User.logOut();
	    $scope.currentUser = null;
	  };

	  $scope.editProfile = function(form) {
	  	
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
