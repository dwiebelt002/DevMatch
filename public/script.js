// load the modern build
var _ = require('lodash-node');
// or the compatibility build
var _ = require('lodash-node/compat');
// or a method category
var array = require('lodash-node/modern/array');
// or a method
var chunk = require('lodash-node/compat/array/chunk');

$(document).ready(function(){
console.log("js loaded");


//submit button function to capture user info and calculate personality match

$( "#submit" ).click(function(){
//form validation function
function validateForm() {
		  var isValid = true;
		  //this checks each question the user must enter
		  $('.form-control').each(function() {
		    if ( $(this).val() === "" )
		        isValid = false;
		  });
		  //this checks all personality questions have been answered
		  $('.chosen-select').each(function() {
		  	if( $(this).val() === "")
		  		isValid = false
		  })
		  //uses the results of the validation to collect data or alert user
		  return isValid;
		}
		// If all required fields are filled
		if (validateForm() == true)
		{


		var answer = _.random(2,10);
		console.log(answer);

	
  		//this variable changes all of the string values to numbers and adds them together to get a point sum
  		//var answer = parseInt($("#q1").val())+parseInt($("#q2").val())+parseInt($("#q3").val())+parseInt($("#q4").val())+parseInt($("#q5").val())+parseInt($("#q6").val())+parseInt($("#q7").val())+parseInt($("#q8").val())+parseInt($("#q9").val())+parseInt($("#q10").val())
  		//console.log(answer);


  		//this multiplies each answer value by 2 because there are only 50 possible points and subtracts it from 100"%". This will give the "%"" match the applicants work style matches ideal candidate style
  		//var totalPercentage =100-(parseInt(answer)*2)
		//console.log(totalPercentage);

			// Creates an object for the user's data
	    	var applicantData = {
	    		first_name: $("#first_name").val(),
	    		last_name: $("#last_name").val(),
	    		address: $("#address").val(),
	    		phone: $("#phone").val(),
	    		gitHub: $("#gitHub").val(),
	    		linkedIn: $("#linkedIn").val(),
	    		score: (totalPercentage)
	    	}

			
	    	// Grab the URL of the website
	    	var currentURL = window.location.origin;

	    	// AJAX post the data to the applicant API. Need to enter path for API in the quotes /api/applicant
	    	$.post(currentURL + "", applicantData, function(data){


	    		alert("Thank you for your application. A recruiter ")//need to change this from an alert to a model
	    	});

	}
	else
	{
		alert("Please fill out all questions before submitting");
	}
	return false
	});//end of form validation
	

	});//end of submit onclick
 //end of document ready