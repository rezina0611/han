/**
 * 1. 배열 요소의 합을 구하는 함수
 * @description 배열 요소의 합을 구하는 함수 입니다. 
 * 배열을 인자로 받아 배열 요소의 합을 반환합니다.
 * @param {number[]} arr - 숫자 배열
 * @returns {number} - 배열 요소의 합
 */

//for문을 통한 반복 연산
function sumArray(arr) {
    let sum1 = 0;    // 합을 저장할 변수는 0으로 초기화
    for(let i = 0; i < arr.length; i++){   // 배열의 요소 개수만큼 반복
        sum1 += arr[i];   // sum1과 배열의 요소를 더해서 다시 sum1에 저장
    }
    return sum1;
}
console.log(sumArray([1, 2, 3, 4]));


//forEach를 통한 연산
function sumArray(arr) {
    let sum2 = 0;
    arr.forEach(function(item){
        sum2 += item;
    });
    return sum2;
}
console.log(sumArray([1, 2, 3, 4]));


//reduce()를 이용한 연산 
//arr.reduce(callback[, initialValue]);   기본구조
/*callback : 배열의 각 요소에 대해 실행할 함수이며 4개의 인수를 가질 수 있다. 
accumulator : callback 함수의 반환 값을 누적한다.
currentValue : 현재 기준으로 처리할 배열의 요소이다.
array : reduce()를 호출할 배열
*/
function sumArray(arr) {
    const sum3 = arr.reduce((accumulator, currentValue) => {
        return accumulator + currentValue
        }, 0);
    return sum3;
}
console.log(sumArray([1, 2, 3, 4])); // 10




/**
 * 2. 배열에 특정 값이 포함되어 있는지 확인하는 함수
 * @description 배열에 특정 값이 포함되어 있는지 확인하는 함수 입니다. 
 * 배열과 값을 인자로 받아 배열에 값이 포함되어 있으면 true, 아니면 false를 반환합니다.
 * @param {any[]} arr - 배열
 * @param {any} value - 값
 * @returns {boolean} - 배열에 값이 포함되어 있으면 true, 아니면 false
 */

//배열에 특정값 포함여부 체크 
function containsValue(arr, value) {
    for(let i = 0; i < value.length; i++){
        if(arr[i] == value) return true;  
    }
    return false; 
}

console.log(containsValue(["apple", "banana", "cherry"], "banana")); // true
//apple 배열[0], banana 배열[1], cherry 배열[2]

/*
설명:함수 containsValue 배열, 값을 선언
    for문으로 0부터 배열의요소 갯수만큼 반복 증가
    만약 배열요소숫자와 값이 일치하면 true 반환
    일치하지 않으면 false 반환
*/




/**
 * 3. 배열에서 특정 값을 제거하는 함수
 * @description 배열에서 특정 값을 제거하는 함수 입니다. 
 * 배열과 값을 인자로 받아 배열에서 값을 제거한 배열을 반환합니다.
 * @param {any[]} arr - 배열
 * @param {any} value - 값
 * @returns {any[]} - 배열에서 값을 제거한 배열
 */

function removeValue(arr, value) {
    for(let i = 0; i < arr.length; i++){
        if(arr[i] === value) {  
            arr.splice(i, 1);
            i--;
        }
    }
}
console.log(removeValue(["apple", "banana", "cherry"], "banana")); // ["apple", "cherry"]
// 답이 언파인드  원인을 모리겠음


//다른 방법
const valueToRemove = "banana";
const array = ["apple", "banana", "cherry"];

for(let i = 0; i < array.length; i++){
    if (array[i] === valueToRemove) {
        array.splice(i, 1);
        i--;
    }
}
console.log(array);  //(2) ['apple', 'cherry']

/*
 * splice() 배열의 중간에 원소를 추가 삭제
 * 배열명.splice(m 시작 위치, n 삭제 개수) : 해당 배열의 m번째(시작 위치)부터 n개만큼 삭제
 * 설명 :
    비교연산자 :  
    ==(동등연산자)  => 비교하려는 두 값이 서로 동등한지를 확인
    ===(일치연산자)   => 비교하려는 두 값이 정확하게 동일한지를 확인
    ==은 값만 비교하지만 ===은 값과 타입을 같이 비교한다.

    for문으로 0부터 배열의요소 갯수만큼 반복 증가하여
    만약 배열요소갯수의 숫자와 데이터값을 비교 같으면
    배열의 요소를 제거 후 배열의 index를 참조하는 i의 값을 하나 감소시킨다
*/




/**
 * 4. 배열을 역순으로 만드는 함수
 * @description 배열을 역순으로 만드는 함수 입니다. 
 * 배열을 인자로 받아 배열을 역순으로 만든 배열을 반환합니다.
 * @param {any[]} arr - 배열
 * @returns {any[]} - 배열을 역순으로 만든 배열
 */
function reverseArray(arr) {
    let result = '';  //빈문자열 만들기
    for( let i = arr.length - 1; i >=0; i--){
        if( i > 0){
            result = result + arr[i] + ",";
        }else{
            result = result + arr[i] + "";
        }
    }
    return ("[" + result + "]");   
}
console.log(reverseArray([1, 2, 3, 4])); // [4, 3, 2, 1]

/*
* 설명 : 반복문의 시작점은 문자열의 마지막 문자 "o"의 인덱스인 (str.length - 1)
i가 0보다 크거나 같은 한 코드는 반복적으로 수행됩니다.
코드가 반복할 때마다 i의 값을 줄입니다
reverse() 함수는
배열의 요소 순서를 역순(reverse)으로 정렬하는 함수
arr.reverse()

const arr = [1, 2, 3, 4, 5];
arr.reverse();
console.log(arr);
*/




/**
 * 5. 배열의 평균을 구하는 함수
 * @description 배열의 평균을 구하는 함수 입니다. 
 * 배열을 인자로 받아 배열의 평균을 반환합니다.
 * @param {number[]} arr - 숫자 배열
 * @returns {number} - 배열의 평균
 */
function averageArray(arr) {
    let avg = 0;
    let sum = 0;
    for( let i = 0; i < arr.length; i++){
        sum += arr[i];
    }
    return avg = sum / arr.length;
}
console.log(averageArray([1, 2, 3, 4])); // 2.5


//다른방식reduce() 메서드 사용
function solution(arr){
    let current = 0;
    let sum = 0;
    return arr.reduce((sum, current) => sum + current) / arr.length;
}
console.log(solution([1, 2, 3, 4]));

/*
설명 : 
1. 배열에 담긴 요소들의 합을 구한다.
2. 요소들의 합을 배열의 길이 (=요소 갯수)로 나눈다.
*/






/**
 * 6. 배열에서 최대값을 찾는 함수
 * @description 배열에서 최대값을 찾는 함수 입니다. 배열을 인자로 받아 배열에서 최대값을 반환합니다.
 * @param {number[]} arr - 숫자 배열
 * @returns {number} - 배열에서 최대값
 */
function findMax(arr) {}

/**
 * 7. 배열을 오른쪽으로 k번 미는 함수
 * @description 배열을 오른쪽으로 k번 미는 함수 입니다. 배열과 숫자를 인자로 받아 배열을 오른쪽으로 k번 민 배열을 반환합니다.
 * @param {any[]} arr - 배열
 * @param {number} k - 숫자
 * @returns {any[]} - 배열을 오른쪽으로 k번 민 결과 배열
 */
function rotate(arr, k) {}
console.log(rotate([1, 2, 3, 4, 5], 2)); // [4, 5, 1, 2, 3]

/**
 * 8. 두 배열에서 공통된 요소를 찾는 함수
 * @description 두 배열에서 공통된 요소를 찾는 함수 입니다. 두 배열을 인자로 받아 두 배열에서 공통된 요소를 반환합니다.
 * @param {any[]} arr1 - 배열
 * @param {any[]} arr2 - 배열
 * @returns {any[]} - 두 배열에서 공통된 요소를 반환
 */
function findCommonElements(arr1, arr2) {}
console.log(findCommonElements([1, 2, 3], [2, 3, 4])); // [2, 3]
