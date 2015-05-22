var total_id=10;
var current_id=1;
var show_ping=true;
var show_pian=true;
var show_luoma=true;
var is_random=false;
function init(){
	//alert("init");
	show_hiragana();
	set_ping();
	set_pian();
	set_luoma();
	set_random();
}
function next(){
	if(current_id+1<total_id){
		current_id++;
	}else{
		current_id=1;	
	}
	show_hiragana();
}
function show_hiragana() {
	var img= $(".hiragana-img");
	img.attr("src","assets/image/hiragana/"+current_id+".png");
}
function change_option(option_type){
	switch(option_type){
		case "ping":
			show_ping=!show_ping;
			set_ping();
		break;
		case "pian":
			show_pian=!show_pian;
			set_pian();
		break;
		case "luoma":
			show_luoma=!show_luoma;
			set_luoma();
		break;
		case "random":
			is_random=!is_random;
			set_random();
		break;
	}
}
function set_ping(){
	var btn=$("#btn-ping");
	if(show_ping){
		btn.css("background-color","red");
	}else{
		btn.css("background-color","gray");
	}
}
function  set_pian() {
	var btn=$("#btn-pian");
	if(show_pian){
		btn.css("background-color","yellow");
	}else{
		btn.css("background-color","gray");
	}
}
function set_luoma(){
	var btn=$("#btn-luoma");
	if(show_luoma){
		btn.css("background-color","blue");
	}else{
		btn.css("background-color","gray");
	}
}
function set_random() {
	var btn=$("#btn-random");
	if(is_random){
		btn.css("background-color","green");
	}else{
		btn.css("background-color","gray");
	}
}