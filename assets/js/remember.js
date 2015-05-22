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
//分别根据每个选项设置提示的显示
function set_display(){
	/*alert(show_hiragana+","+show_katakana);*/
	set_hiragana();
	set_katakana();
	set_Roman();
	set_kana_size();
}
function speak_function() {
	/*alert("播放音乐");*/
	var audio=$("#speak-audio");
	audio.attr("src","assets/sound/"+current_id+".mp3");
	audio.attr("autoplay","true");
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
	set_kana_size();
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
		btn.css("background-color","orange");
		img.attr("src","assets/image/katakana/"+current_id+".png");
		img.css("display","inline");
	}else{
		btn.css("background-color","gray");
		img.css("display","none");
	}
}
function set_kana_size(){
	var group=$(".kana");
	var img= $(".katakana-img");
	var img2=$(".hiragana-img");
	var roman=$(".Roman-img");
	var tip=$(".tip");
	var speak_btn=$(".speak-btn")
	if(show_Roman){
		//罗马音显示的话就要给它留30%的高度
		group.css("height","70%");
		group.css("width","70%");
	}else{
		//罗马音不显示的情况
		group.css("height","100%");
		group.css("width","100%");
	}
	if(show_hiragana&&show_katakana){
			img.css("height","30%");
			img2.css("height","70%");
	}else if(!show_hiragana&&show_katakana){
			img.css("height","70%");
	}else if(show_hiragana&&!show_katakana){
			img2.css("height","70%");
	}else if(!show_hiragana&&!show_katakana){
			group.css("height","30%");
	}
	if(!show_hiragana&&!show_katakana&&!show_Roman){
		/*tip.css("display","inline");
		float: right;
		margin-right: 5em;*/
		speak_btn.css("display","inline");
		speak_btn.css("top","40%");
		speak_btn.css("right","");
		speak_btn.css("margin","0px auto");
		/*speak_btn.css("left","40%");
		speak_btn.css("right","40%");*/
	
	}else{
		speak_btn.css("right","2%");
		speak_btn.css("top","20%");
		speak_btn.css("position","absolute");		
		speak_btn.css("float","right");
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
		btn.css("background-color","darksalmon");
	}
}