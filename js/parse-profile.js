Parse.initialize("PuijnT2sgxll68hnu5sjKsDhoKpku51VGt5f1ApB","m3zAPTg45wpzJVKbZq86fycmmP7htZHcUbDZT3NR");

angular.module('AuthApp', []).run(['$rootScope', function($scope) {
  $scope.scenario = 'Basic View';
  $scope.currentUser = Parse.User.current();

  var currentUser = Parse.User.current();
  
  if (currentUser == null) window.location = "http://wec2017.ca/DelegatePortal/portal.html";

  if (currentUser.get("fullName") != null) document.getElementById("fullName").innerHTML = currentUser.get("fullName");
  if (currentUser.get("competition") != null)document.getElementById("competition").innerHTML = currentUser.get("competition");
  if (currentUser.get("degree") != null || currentUser.get("school") != null)document.getElementById("degree-school").innerHTML = currentUser.get("degree") + " - " + currentUser.get("school")
  if (currentUser.get("phone") != null)document.getElementById("phone").innerHTML = currentUser.get("phone");
  if (currentUser.get("phone") != null)document.getElementById("phone").href = "tel:" + currentUser.get("phone");
  if (currentUser.get("photo") != null) document.getElementById("profileImg").src = currentUser.get("photo").url();  
  
  $scope.editProfile = function(form) {
    if (form.fullName != undefined) currentUser.set('fullName', form.fullName);
  	if (form.phone != 0) currentUser.set('phone', form.phone);
    if (form.email != undefined) currentUser.set('email', form.email);
  	if (form.school != "Pick Your School") currentUser.set('school', document.getElementById("formSchool").options[document.getElementById("formSchool").selectedIndex].text);
  	if (form.degree != undefined) currentUser.set('degree', form.degree);
  	if (document.getElementById("formCompetition").options[document.getElementById("formCompetition").selectedIndex].text != "Pick Your Competition") currentUser.set('competition', document.getElementById("formCompetition").options[document.getElementById("formCompetition").selectedIndex].text);
  	
  	currentUser.save(null, {
  	    success: function(user) {
  	        currentUser.fetch();
            window.location = "profile.html"
  	        alert('Profile Saved');
  	    },
  	    error: function(user, error) {
  	        alert('Failed to update object, with error code: ' + error.message);
  	    }
  	});
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
			alert('You have been logged out');
            // check if really logged out
            if (Parse.User.current())
                console.log("Failed to log out!");
        }

        window.location.href = "portal.html";
    });
});

$(document).ready(function() {
    $('select').material_select();
 });

$('.datepicker').pickadate({
    selectMonths: true, // Creates a dropdown to control month
    selectYears: 100
  });

function uploadPhoto() {
  Materialize.toast('Please wait for upload confirmation', 5000)
  var fileUploadControl = $("#photo")[0];
  var currentUser = Parse.User.current();
  if (fileUploadControl.files.length > 0) {
    var file = fileUploadControl.files[0];
    var name = "photo.jpg";
    var parseFile = new Parse.File(name, file);
    parseFile.save().then(function() {
      // The file has been saved to Parse.
      currentUser.set("photo", parseFile);
      currentUser.save(null, {
        success: function(currentUser) {
            currentUser.fetch();
            window.location = "profile.html"
            alert('Photo Uploaded');
        },
        error: function(currentUser, error) {
            alert('Failed to update object, with error code: ' + error.message);
        }
    });
    }, function(error) {
      // The file either could not be read, or could not be saved to Parse.
      alert('Failed to update object, with error code: ' + error.message);
    });
  }
} 

function uploadResume() {
  Materialize.toast('Please wait for upload confirmation', 5000)
  var fileUploadControl = $("#resume")[0];
  var currentUser = Parse.User.current();
  if (fileUploadControl.files.length > 0) {
    var file = fileUploadControl.files[0];
    var name = "resume.pdf";
    var parseFile = new Parse.File(name, file);
    parseFile.save().then(function() {
      // The file has been saved to Parse.
      currentUser.set("resume", parseFile);
      currentUser.save(null, {
        success: function(currentUser) {
            currentUser.fetch();
            window.location = "profile.html"
            alert('Resume Uploaded');
        },
        error: function(currentUser, error) {
            alert('Failed to update object, with error code: ' + error.message);
        }
    });
    }, function(error) {
      // The file either could not be read, or could not be saved to Parse.
      alert('Failed to update object, with error code: ' + error.message);
    });
  }
}

$(document).ready(function(){
    $('.materialboxed').materialbox();
  });

