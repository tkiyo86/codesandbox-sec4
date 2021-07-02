/*
const.letの変数宣言
*/

/**　自動で下記は入力される
 *
 */

// ctrl + / でまとめてコメントアウト

// var val1 = "var変数";
// console.log(val1);

// // var変数は上書き可能
// val1 = "var変数を上書き"
// console.log(val1);

// // var変数は再宣言可能
// var val1 = "var変数を再宣言"
// console.log(val1);

let val2 = "let変数";
console.log(val2);

//　上書きが可能
val2 = "let変数を上書き";
console.log(val2);

//　letは再宣言できない
//let val2 = "let変数を再宣言"

const val3 = "const変数";
console.log(val3);

//const変数は上書き不可
//val3 = "const変数を再宣言"
// TypeError: "val3" is read-only

// objや配列は書き換えが可能
const val4 = {
  name: "たろう",
  age: 28
};

console.log(val4);

val4.name = "はなこ";
val4.address = "Tokyo";
console.log(val4);

//　配列の書き換え可能
const val5 = ["dog", "cat"];
val5[0] = "bird";
val5.push("monlkey");
console.log(val5);

/**
 * --------------------------------
 * １９テンプレート文字列
 * --------------------------------
 */

// const name = "taro";
// const age = 28;

// // 私の名前は＊＊です年齢は＊＊です　と表示したい

// // 従来の表記
// const message1 = "私の名前は" + name + "年齢は" + age + "です";
// console.log(message1);

// // バッククオート　shift+@キー
// const message2 = `私の名前は${name}です。年齢は${age}です。`;
// console.log(message2);

/**
 * --------------------------------
 * ２０アロー関数
 * -------
 */

//　従来の関数
function func1(str) {
  // ここに処理を書く
  return str;
}
console.log(func1("func1です"));

//　上と同じ処理
const func11 = function (str) {
  // ここに処理を書く
  return str;
};
console.log(func11("func11です"));

// アロー関数
// 引数はかっこなしでもOK
const func2 = (str) => {
  //ここに処理を書く
  return str;
};
console.log(func2("func2です"));

//　一行でもかける,retrunも省略できる
const func21 = (str) => str;
console.log(func21("func21です"));

// 引数２つ
const func3 = (num1, num2) => {
  return num1 + num2;
};
console.log(func3(10, 5));

/**
 * --------------------------------
 * ２１分割代入
 * --------------------------------
 */
const myProfile = {
  name: "Taro",
  age: 25
};

const message211 = `名前は${myProfile.name}です。年齢は${myProfile.age}歳です`;
console.log(message211);

//　｛｝波かっこ＝オブジェクト
//　別の場所でnameを宣言済だったりするとエラーがでる
const { name, age } = myProfile;
//const { name, age } = myProfile;
const message212 = `名前は${name}です。年齢は${age}歳です`;
console.log(message212);

// 配列[]
const myProfile21 = ["hanako", 27];
const message213 = `名前は${myProfile21[0]}です。年齢は${myProfile21[1]}歳です`;
console.log("213", message213);

const [name4, age4] = myProfile21;
const message214 = `名前は${name4}です。年齢は${age4}歳です`;
console.log("214", message214);
