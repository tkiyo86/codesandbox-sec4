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

const name = "taro";
const age = 28;

// 私の名前は＊＊です年齢は＊＊です　と表示したい

// 従来の表記
const message1 = "私の名前は" + name + "年齢は" + age + "です";
console.log(message1);

// バッククオート　shift+@キー
const message2 = `私の名前は${name}です。年齢は${age}です。`;
console.log(message2);
