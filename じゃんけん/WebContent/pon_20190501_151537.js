function じゃんけん(種類,H1,H2,G1,G2,C1,C2,P1,P2,R1,R2){
	var 出した手;
	var 相手の手の数値;
	var 相手の手;
	出した手 = 種類の変換(種類);
	相手の手の数値 = 相手の手を数値で();
	相手の手 = 種類の変換(相手の手の数値);
	表示('#msg1',出した手);
	表示('#msg2',相手の手);
	if (種類 == 1 && 相手の手の数値 == 1){
		
	}
	}

function メイン処理(自分,相手){
	
}


function 初期設定(){
	オール表示("初期設定を行いました。","ごゆるりと",10,10,1,1,2,2,3,3);
}

function オール表示(msg1,msg2,H1,H2,G1,G2,C1,C2,P1,P2,R1,R2,rireki1,rireki2){
	表示('#msg1',msg1);
	表示('#msg2',msg2);
	表示('#H1',H1);
	表示('#H2',H2);
	表示('#G1',G1);
	表示('#G2',G2);
	表示('#C1',C1);
	表示('#C2',C2);
	表示('#P1',P1);
	表示('#P2',P2);	
	表示('#rireki1',rireki1);
	表示('#rireki2',rireki2);	
	
}

function 相手の手を数値で(){
	var 戻り値;
	戻り値 =  乱数(3);
	return 戻り値;
}

function 乱数(数){
	var 戻り値;
	戻り値 =  Math.floor(Math.random() * 数)+1;
	return 戻り値;
}


function 種類の変換(種類){
var 戻り値;
	if (種類 == 1 ){
		戻り値 = "グー";
	} else if(種類 == 2){
		戻り値 = "チョキ";
	} else if(種類 == 3){
		戻り値 = "パー";		
	}
	return 戻り値; 
}

function 表示(アイデ,内容){
	var 何か;
	何か = document.querySelector(アイデ);
	何か.textContent = 内容;
}
