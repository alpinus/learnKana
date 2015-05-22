var total_id=10;
var current_id=1;
var show_hiragana=true;
var show_katakana=true;
var show_Roman=true;
var is_random=false;
function init(){
	set_display();
	set_Roman();
	set_random();
	
}
function next(){
	if(current_id<total_id){
		current_id++;
	}else{
		current_id=1;	
	}
	set_display();
}
//分别根据每个选项设置提示的显示
function set_display(){
	set_hiragana();
	set_katakana();
	set_Roman();
}


function change_option(option_type){
	switch(option_type){
		case "hiragana":
			show_hiragana=!show_hiragana;
			set_hiragana();
		break;
		case "katakana":
			show_katakana=!show_katakana;
			set_katakana();
		break;
		case "Roman":
			show_Roman=!show_Roman;
			set_Roman();
		break;
		case "random":
			is_random=!is_random;
			set_random();
		break;
	}
}
function set_hiragana(){
	var btn=$("#btn-hiragana");
	var img= $(".hiragana-img");
	if(show_hiragana){
		btn.css("background-color","red");
		img.attr("src","assets/image/hiragana/"+current_id+".png");
		img.css("display","inline");
	}else{
		btn.css("background-color","gray");
		img.css("display","none");
	}
}
function  set_katakana() {
	var btn=$("#btn-katakana");
	var img= $(".katakana-img");
	if(show_katakana){
		btn.css("background-color","yellow");
		img.attr("src","assets/image/katakana/"+current_id+".png");
		img.css("display","inline");
	}else{
		btn.css("background-color","gray");
		img.css("display","none");
	}
}
function set_Roman(){
	var btn=$("#btn-Roman");
	var img= $(".Roman-img");
	if(show_Roman){
		btn.css("background-color","blue");
		img.attr("src","assets/image/Roman/"+current_id+".png");
		img.css("display","inline");
	}else{
		btn.css("background-color","gray");
		img.css("display","none");
	}
}
function set_random() {
	var btn=$("#btn-random");
	if(is_random){
		btn.text("乱序");
		btn.css("background-color","gray");
	}else{		
		btn.text("顺序");
		btn.css("background-color","green");
	}
}