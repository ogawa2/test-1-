'use strict';

{
    //配列

    // const score1 =80;
    // const score2 =90;
    // const score3 =40;

    // const scores = [80, 90, 40];
    // console.log(scores[1]);

    // scores[2] = 100;
    // console.log(scores);
     
    // console.log(scores.length);

    //オブジェクト
    // const player = ['taguchi, 32'];
    const player = {
        name: 'taguchi',
        score: 32,
    };
    // console.log(player.name);
    // console.log(player['name']);
    // player.score = 100;
    // console.log(player);
    player.email = 'taguchi@gmail.com';
    console.log(player);
    delete player.score;
    console.log(player);

}