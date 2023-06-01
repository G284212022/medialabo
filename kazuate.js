// 答え
let kotae = Math.floor(Math.random()*10) + 1;
console.log('答え（デバッグ用）: ' + kotae);

// 入力回数（予想回数）
let kaisu = 0;
let sei = 0;

// 予想を4回実行する
// 将来以下の hantei(); の4回の呼び出しを全て削除する
// 代わりにここでは，ボタンを押したら hantei() を呼び出すイベント処理をする
let b1 = 
document.querySelector('button#print')
b1.addEventListener('click',hantei);


// ボタンを押した後の処理をする関数 hantei() の定義
function hantei() {
  kaisu++
  // 将来ここでは 4 ではなくテキストボックスに指定された数値を yoso に代入する
  let x = document.querySelector('input[name="yosou"]');
  let yoso = parseInt(x.value);
  kaisu = kaisu + 1;
  let kai = document.querySelector('span#kaisu');
  kai = kaisu;
  document.getElementById('kaisu').textContest = kai;

  let ans = document.querySelector('span#answer');
  ans = yosou;
  document.getElementById('answer').textContent = ans;
  // 課題3-1: 正解判定する
  // kotae と yoso が一致するかどうか調べて結果を出力
  // 課題3-1における出力先はコンソール
  var re = document.querySelector('span#result');
  if (kaisu > 3) {
  re = ('答えは' + kotae + 'でした.既にゲームは終わっています.');  
  } else if (kaisu < 3) {
    if (yoso === kotae) {
      re = ('正解です.おめでとう！'); 
    } else if (yoso < kotae) {
      re = ('まちがい.答えはもっと大きいですよ.');
    } else if (yoso > kotae) {
      re = ('まちがい.答えはもっと小さいですよ.');
    }
  } else if (kaisu === 3) {
    if (yoso === kotae) {
      re = ('正解です.おめでとう！');
    } else {
      re = ('答えは' + kotae + 'でした.既にゲームは終わっています.');
    }
  }
  document.getElementById('result').textContent = re;
}