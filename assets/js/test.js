
function init(){
	ask();
	set_display();
	hide_other();
}

var total_id=45;
var current_id=1;
var show_hiragana=true;
var show_katakana=true;
var show_Roman=true;
var is_random=false;
var temp=true;
function  hide_other() {
	
	$(".speak-btn").css("display","none");
	$(".tip").css("display","none");
	$(".kana").css("display","none");
}
function ask() {
	var ask_box=$(".ask-box");
	var answer_box=$(".answer-box");
		answer_box.css("display","none");
		
		
}
function answer() {
	var ask_box=$(".ask-box");
	var answer_box=$(".answer-box");
	ask_box.css("display","none");
	answer_box.fadeIn(1000);
	
}
function  set_random() {
	
}