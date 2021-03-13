var input_i = 0;
var trans_i = 1;

window.onload = function(){
	select_language("input_language",0);
	select_language("trans_language",1);
}

function language_code(text){
	// en英語、ja日本語、ko韓国語、deドイツ語、frフランス語
	switch (text){
		case "英語":
			return "en";
		case "日本語":
			return "ja";
		case "韓国語":
			return "ko";
		case "ﾄﾞｲﾂ語":
			return "de";
		case "ﾌﾗﾝｽ語":
			return "fr";
	}
}

// pythonの trans に 翻訳ワードを渡す
input_text.addEventListener('change',trans_js,false);
translation.addEventListener('click',trans_js,false);
function trans_js(){
	var in_l = document.getElementsByClassName('input_language');
	var tr_l = document.getElementsByClassName('trans_language');
	eel.trans_py(input_text.value,language_code(in_l[input_i].textContent),language_code(tr_l[trans_i].textContent));
}


// 言語の切り替え（入力側
function input_lng_change(event) { 
	var ul = document.getElementById("input_language");
	var li = ul.querySelectorAll("li");
	i = Array.prototype.indexOf.call(li, event.target);
	if (i != input_i){
		
		if ( trans_i == i ){
			select_language("input_language",i);	
			// 翻訳先言語と、翻訳元言語が同じ場合、翻訳元だった言語を翻訳先言語に切り替え
			select_language("trans_language",input_i)
			trans_i = input_i;
			input_i = i;

			let word = input_text.value;
			input_text.value = trans_text.value;
			trans_text.value = word;
		}else{
			if(input_text.value!=""){
				// 例えば、翻訳元に「山」と入っている時に「英語」を選んだ時、
				//「山」は英語ではないのでリセットするか？
				if(	window.confirm("入力内容がリセットされますが宜しいですか？")){
					select_language("input_language",i);
					input_i = i;
					input_text.value="";
					trans_text.value="";
				}else{
					//言語を変えない、input_text もそのまま。
				}
			}else{
				select_language("input_language",i);
				input_i = i;
			}
		}
	}
}
// 言語の切り替え（結果側
function trans_lng_change(event) { 
	var ul = document.getElementById("trans_language");
	var li = ul.querySelectorAll("li");
	i = Array.prototype.indexOf.call(li, event.target);
	if (i != trans_i){
		select_language("trans_language",i);
		if ( input_i == i ){
			// 翻訳元言語と、翻訳先言語が同じ場合、翻訳先だった言語を翻訳元言語に切り替え
			select_language("input_language",trans_i)
			input_i = trans_i;
			
			let word = input_text.value;
			input_text.value = trans_text.value;
			trans_text.value = word;
		}
		trans_i = i;
		trans_js();
	}
}
// 選択された言語のstyle設定
function select_language(parent_id,select_i){
	var ul = document.getElementById(parent_id);
	var li = ul.querySelectorAll("li");
	//alert(li[i].textContent);
	
	for (let i = 0; i < li.length; i++) {
		if (i == select_i){
			li[i].style.borderBottom="2px solid #3333ff";
			li[i].style.backgroundColor="#ffffff";
			li[i].style.color="#111";
		}else{
			li[i].style.borderBottom="2px solid #cccccc";
			li[i].style.backgroundColor="#ccc";
			li[i].style.color="#777";
		}
	}
	
}

eel.expose(write_trans_text_js)
function write_trans_text_js(text){
	trans_text.value = text;
}

