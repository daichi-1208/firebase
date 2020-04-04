/*function sample(){
    console.log("bbb_test");
    console.log(1+2);
    let hensuu = 0;
    if(hensuu == 0){
        console.log("0だよーん");
    }else if(hensuu == 1){
        console.log("1だよーん");
    }else{
        console.log("違うよーん");
    }
    let hairetsu = ["大地", "マスター", "黒原", "名越"];
    for (let i = 0; i < hairetsu.length; i++){
        console.log(hairetsu[i]);
    }
    (function(){
        console.log("関数です");
    })();
}
sample();
*/
/*
function hoge(name, number){
    console.log(name);
    console.log(number);
}
hoge("daichi", 1);
hoge("takeshi", 2);
*/
(function(name, number){
    console.log(name);
    console.log(number);
})("daichi", 1);