function じゃんけん(種類, H1, H2, G1, G2, C1, C2, P1, P2, R1, R2) {
	var 出した手;
	var 相手の手の数値;
	var 相手の手;
	var MSG1, MSG2;
	H1 = parseFloat(document.getElementById("H1").textContent);
	H2 = parseFloat(document.getElementById("H2").textContent);
	G1 = parseFloat(document.getElementById("G1").textContent);
	G2 = parseFloat(document.getElementById("G2").textContent);
	C1 = parseFloat(document.getElementById("C1").textContent);
	C2 = parseFloat(document.getElementById("C2").textContent);
	P1 = parseFloat(document.getElementById("P1").textContent);
	P2 = parseFloat(document.getElementById("P2").textContent);
	R1 = parseFloat(document.getElementById("R1").textContent);
	R2 = parseFloat(document.getElementById("R2").textContent);
	出した手 = 種類の変換(種類);
	相手の手の数値 = 相手の手を数値で();
	相手の手 = 種類の変換(相手の手の数値);
	MSG1 = "相手の" + 相手の手 + "に対して、あなたは" + 出した手 + "を出しました。";
	MSG2 = "";
	あなた = "あなたに";
	相手 = "相手に"
	アイコ = "アイコです。";
	勝ち = "勝ったので、";
	負け = "負けたので、";
	のダメ = "のダメージ";
	if (種類 == 1 && 相手の手の数値 == 1) {
		// グーグー
		H1 = H1 - G1;
		H2 = H2 - G2;
		MSG2 = MSG2 + アイコ;
		MSG2 = MSG2 + あなた + G1 + のダメ;
		MSG2 = MSG2 + 相手 + G2 + のダメ;
	} else if (種類 == 1 && 相手の手の数値 == 2) {
		// グーチョキ
		H2 = H2 - G1;
		MSG2 = MSG2 + 勝ち;
		MSG2 = MSG2 + 相手 + G1 + のダメ;
	} else if (種類 == 1 && 相手の手の数値 == 3) {
		// グーパー
		H1 = H1 - P2;
		MSG2 = MSG2 + 負け;
		MSG2 = MSG2 + あなた + P2 + のダメ;
	} else if (種類 == 2 && 相手の手の数値 == 1) {
		// チョキグー
		H1 = H1 - G2;
		MSG2 = MSG2 + 負け;
		MSG2 = MSG2 + あなた + G2 + のダメ;
	} else if (種類 == 2 && 相手の手の数値 == 2) {
		// チョキチョキ
		H1 = H1 - C1;
		H2 = H2 - C2;
		MSG2 = MSG2 + アイコ;
		MSG2 = MSG2 + あなた + C1 + のダメ;
		MSG2 = MSG2 + 相手 + C2 + のダメ;
	} else if (種類 == 2 && 相手の手の数値 == 3) {
		// チョキパー
		H2 = H2 - C1;
		MSG2 = MSG2 + 勝ち;
		MSG2 = MSG2 + 相手 + C1 + のダメ;
	} else if (種類 == 3 && 相手の手の数値 == 1) {
		// パーグー
		H2 = H2 - P1;
		MSG2 = MSG2 + 勝ち;
		MSG2 = MSG2 + 相手 + P1 + のダメ;
	} else if (種類 == 3 && 相手の手の数値 == 2) {
		// パーチョキ
		H1 = H1 - C2;
		MSG2 = MSG2 + 負け;
		MSG2 = MSG2 + あなた + C2 + のダメ;
	} else if (種類 == 3 && 相手の手の数値 == 3) {
		// パーパー
		H1 = H1 - P1;
		H2 = H2 - P2;
		MSG2 = MSG2 + アイコ;
		MSG2 = MSG2 + あなた + P1 + のダメ;
		MSG2 = MSG2 + 相手 + P2 + のダメ;
	}
	オール表示(MSG1, MSG2, H1, H2, G1, G2, C1, C2, P1, P2, R1, R2);
}

function 初期設定() {
	オール表示("初期化", "完了", 30, 30, 1, 1, 1, 1, 1, 1, 55, 55);
}

function オール表示(msg1, msg2, H1, H2, G1, G2, C1, C2, P1, P2, R1, R2) {
	表示('#msg1', msg1);
	表示('#msg2', msg2);
	表示('#H1', H1);
	表示('#H2', H2);
	表示('#G1', G1);
	表示('#G2', G2);
	表示('#C1', C1);
	表示('#C2', C2);
	表示('#P1', P1);
	表示('#P2', P2);
	表示('#R1', R1);
	表示('#R2', R2);

}

function 相手の手を数値で() {
	var 戻り値;
	戻り値 = 乱数(60);
	return 戻り値;
}

function 乱数(数) {
	var 戻り値, ランダム;
	ランダム = Math.floor(Math.random() * 数) + 1;
	if (ランダム <= 9) {
		戻り値 = 3;
	} else if (ランダム <= 21) {
		戻り値 = 1;
	} else if (ランダム <= 60) {
		戻り値 = 2;
	}
	return 戻り値;
}

function 種類の変換(種類) {
	var 戻り値;
	if (種類 == 1) {
		戻り値 = "グー";
	} else if (種類 == 2) {
		戻り値 = "チョキ";
	} else if (種類 == 3) {
		戻り値 = "パー";
	}
	return 戻り値;
}

function 表示(アイデ, 内容) {
	var 何か;
	何か = document.querySelector(アイデ);
	何か.textContent = 内容;
}

function 選択されていたら値を返す(id){
	var a;
	if (id.checked){
		a = id.value;
	} else{
		a = 0;
	}	
	return Number(a);
}