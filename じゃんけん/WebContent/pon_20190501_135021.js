function janken(種類,H1,H2,G1,G2,C1,C2,P1,P2){
	var あ行目,い行目,う行目
	あ行目 = document.querySelector('#msg1');
	あ行目.textContent = 種類;
	表示('#msg2',"ss");
	}

function 表示(アイデ,内容){
	var 何か;
	何か = document.querySelector(アイデ);
	何か.textContent = 内容;
}
