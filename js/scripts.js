//// this landing page is generated using purelander.com


$(document).ready(function (){
	$('#step2').hide();
	$('#step3').hide();
	$('#step4').hide();
	$('#checkingAnswers').hide();
	$('#checkAnswer1').hide();
	$('#checkAnswer2').hide();
	$('#checkAnswer3').hide();
	$('#checkAnswer4').hide();
	$('#checkText1').hide();
	$('#checkText2').hide();
	$('#checkText3').hide();
	$('#checkText4').hide();
  $('#finalBtn').hide();
  
	$('#step1Yes').click(function (){
		$('#step1').hide();
		$('#step2').fadeIn();
  });

  $('#step1No').click(function (){
		$('#step1').hide();
		$('#step2').fadeIn();
  });
  
  $('#step2Yes').click(function (){
		$('#step2').hide();
		$('#step3').fadeIn();
  });

  $('#step2No').click(function (){
		$('#step2').hide();
		$('#step3').fadeIn();
  });

  $('#step3Yes').click(function (){
		$('#step3').hide();
		    $('#checkingAnswers').show();
    $('#checkText1').fadeIn();
    $('#checkText2').fadeIn();
    checkAnswers();
  });

  $('#step3No').click(function (){
		$('#step3').hide();
	    $('#checkingAnswers').show();
    $('#checkText1').fadeIn();
    $('#checkText2').fadeIn();
    checkAnswers();
  });

  $('#step4Yes').click(function (){
		$('#step4').hide();
    $('#checkingAnswers').show();
    $('#checkText1').fadeIn();
    $('#checkText2').fadeIn();
    checkAnswers();
  });

  $('#step4No').click(function (){
		$('#step4').hide();
    $('#checkingAnswers').show();
    $('#checkText1').fadeIn();
    $('#checkText2').fadeIn();
    checkAnswers();
  });
  
	function checkAnswers(){
		setTimeout(function (){
			$('#checkText2').hide();
			$('#checkAnswer1').fadeIn();
    },2000);
    
		setTimeout(function (){
			$('#checkAnswer2').fadeIn();
			$('#checkText3').fadeIn();
    },4000);
    
		setTimeout(function (){
			$('#checkText3').hide();
			$('#checkAnswer3').fadeIn();
			$('#checkText4').fadeIn();
    },6000);
    
		setTimeout(function (){
			$('#checkText4').hide();
      $('#checkAnswer4').fadeIn();
    },8000);
    
		setTimeout(function (){
			$('#progressLoader').hide();
			$('#finalBtn').fadeIn();
		},8000);
	}
});