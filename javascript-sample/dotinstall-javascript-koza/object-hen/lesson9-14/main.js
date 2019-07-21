'use strict';

{
    

    // const player = {
    //     name: 'taguchi',
    //     score: 32,
    // };
    //class内で定義する関数のことをメソッドという。
// class Player {
//     constructor(x, y){
//         this.name = x;
//         this.score = y;
//     }
//     showInfo(){
//         console.log(`名前は ${this.name} 成績は ${this.score}`);
//     }
//     static showVersion(){
//         console.log('player class ver.1.0');
//     }
// }    
//     const taguchi = new Player('taguchi',32);
//     const fkoji =new Player('fkoji', 45);
//     // console.log(fkoji.score);
//     taguchi.showInfo();
//     fkoji.showInfo();

//     Player.showVersion();
// class Player {
//     constructor(name, score){
//         this.name = name;
//         this.score = score;
//         }
//     showInfo(){
//         console.log(`名前は ${this.name} 成績は ${this.score}`);
//     }
// }
// class SoccerPlayer extends Player {
//     constructor(name, score, number){
//         super(name,score);
//         this.number = number;
//     }
//     kick(){
//         console.log('gooaal');
//     }
// }
// const tsubasa = new SoccerPlayer('つばさ','80点','背番号10番');
// tsubasa.kick();
// console.log(tsubasa.number);
// tsubasa.showInfo();

// const o = {  //キーや値の一覧を配列として取得するメソッドを学ぶ
//     a: 1,
//     b: 2,
//     c: 4,
//     d: 'どうもです'
// };
// console.log(o['d']);
// // console.log(Object.keys(o)); ['a', 'b']
// // console.log(Object.values(o)); [1, 2]
// // console.log(Object.entries(o));[['a', 1], ['b', 2]]
// const r = Object.keys(o);
// console.log(r);
// r.forEach(x => {
//   console.log(o[x]); 
// });
// const r = Object.keys(o);
// console.log(r[1]);

// const a = [10, 20];
// const b = [1, 2, ...a];
// console.log(b);

// const a = [10, 20];
// const sum = (a, b) => a+ b;
// console.log(sum(...a));

const o1 = {a: 1};
const o2 = {...o1, b: 2};
console.log(o2)
;
}


