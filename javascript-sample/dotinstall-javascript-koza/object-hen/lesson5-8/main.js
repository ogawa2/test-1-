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
class Player {
    constructor(name, score){
        this.name = name;
        this.score = score;
        }
    showInfo(){
        console.log(`名前は ${this.name} 成績は ${this.score}`);
    }
}
class SoccerPlayer extends Player {
    constructor(name, score, number){
        super(name,score);
        this.number = number;
    }
    kick(){
        console.log('gooaal');
    }
}
const tsubasa = new SoccerPlayer('つばさ','80点','背番号10番');
tsubasa.kick();
console.log(tsubasa.number);
tsubasa.showInfo();

}
