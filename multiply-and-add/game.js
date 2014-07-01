function init() {
  start_problem();
  $("#answer").change(function() {
	var nval = $(this).val();
	var split = nval.split(",");
	var num1 = parseInt( split[0].trim(), 10 );
	var num2 = parseInt( split[1].trim(), 10 );
	if( Math.min(num1,num2) == Math.min(answer1,answer2) &&
		Math.max(num1,num2) == Math.max(answer1,answer2) ) {
	  $(this).val("");
	  updateScore( score + 1 );
	  start_problem();
	}
  });
  start_timer();
}

function start_timer() {
  tick();
  window.setInterval(tick, 1000);
}

function start_problem() {
  answer1 = 1 + Math.round(11 * Math.random());
  answer2 = 1 + Math.round(11 * Math.random());

  // show question
  $("#mult").html( answer1 * answer2 );
  $("#add").html( answer1 + answer2 );

}

var score = 0;
function updateScore(newscore) {
  score = newscore;
  $("#score").html(score);
}

function on_timer_end() {
  alert("Time up! Score is " + score);
}

var time_left = 30;
function tick() {
  $("#time").html( time_left );  
  time_left -= 1;
  if(time_left == 0) {
	on_timer_end();
  }
}

init();
