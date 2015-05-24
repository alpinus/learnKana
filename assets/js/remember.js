var total_id=45;
var current_id=1;
var show_hiragana=true;
var show_katakana=true;
var show_Roman=true;
var is_random=false;
function init(){
	set_display();
}
function next(){
	if(!is_random){
		if(current_id<total_id){
			current_id++;
		}else{
			current_id=1;	
		}
	}else{
		current_id=Math.ceil(Math.random()*total_id);
	}
	set_display();
}


function set_random() {
	var btn=$("#btn-random");
	if(is_random){
		btn.text("乱序");
		btn.css("background-color","gray");
	}else{
		btn.text("顺序");
		btn.css("background-color","darksalmon");
	}
}