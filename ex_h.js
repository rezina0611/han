
/* 함수선언방법
* function 함수이름(){}  함수();
* let 변수명 = function(){}
* function 함수이름() =>{}
*/
function sayHello(){
    console.log("Hello, World!");
}
sayHello();


//함수를 변수에 대입해서 콘솔로 변수를 출력
let sayHello2 = function(){
    console.log("Hello, World!");
}
sayHello2();


function add(a,b){
    return a + b;
}

let result = add(3,4); //3과 4가 인자로 전달됨
console.log(result); //변수 result 콜솔에 7출력


function greetName(name="Name") {
    console.log("Hello" + name + "!");
}
greetName(); // 콘솔에 "Hello Name" 출력
greetName("hanrezina"); //콘솔에 "Hello hanrezina!" 출력


function solution(num){
    let answer = "";
    if(num % 2 == 0){
        answer ='Even';
    }else{
        answer='odd';
    }
    return answer;
}
solution(3);