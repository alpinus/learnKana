
function init(){
	ask();
	set_display();
}

var total_id=45;
var current_id=1;
var show_hiragana=true;
var show_katakana=true;
var show_Roman=true;
var is_random=false;

function ask() {
	var ask_box=$(".ask-box");
	var answer_box=$(".answer-box");
	ask_box.css("display","inline");
	answer_box.css("display","none");
}
function answer() {
	var ask_box=$(".ask-box");
	var answer_box=$(".answer-box");
	ask_box.css("display","none");
	answer_box.css("display","inline");
}