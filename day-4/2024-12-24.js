/**
 * 안녕하세요 정성님! 작성해주신 답안 확인했습니다.
 *
 * 끊임없는 고민을 통해 문제를 해결하면서
 * 배열에 대한 자신감을 얻으셨으리라 믿어요.
 *
 *
 * 긴 시간동안 함수와 배열에 대해 고생하셨고, 많은 성장을 이루셨다고 생각합니다.
 * 아래 문제는 실제 코딩 테스트에 나오는 문제들입니다.
 *
 * 난이도가 조금 있는 편이라 가능한 부분 까지 문제를 풀어보시고,
 * 정답보다 어떤 아이디어를 생각했고, 어떻게 구현하려 했는지에 대한 과정이 더욱 중요합니다
 * 문제를 풀어보시고 풀이 과정을 다음 스터디 때 공유해주세요!
 *
 * 앞으로도 열심히 성장해보아요! 즐거운 크리스마스 보내세요!
 *
 */

/**
 * 두 수의 합이 targetSum과 같은 쌍을 찾는 함수
 * @description 두 수의 합이 targetSum과 같은 쌍을 찾는 함수 입니다. 배열과 숫자를 인자로 받아 두 수의 합이 targetSum과 같은 쌍을 배열로 반환합니다.
 * @param {number[]} arr - 숫자 배열
 * @param {number} targetSum - 목표 합
 * @returns {number[][]} - 두 수의 합이 targetSum과 같은 쌍
 */
function findPairsWithSum(arr, targetSum) {}

console.log(findPairsWithSum([1, 2, 3, 4, 5], 5)); // [[1, 4], [2, 3]]
console.log(findPairsWithSum([1, 3, 5, 7], 10)); // [[3, 7]]
console.log(findPairsWithSum([1, 2, 3], 6)); // []

/**
 * 두 배열에서 공통된 요소를 찾는 함수
 * @description 두 배열에서 공통된 요소를 찾는 함수 입니다. 두 배열을 인자로 받아 두 배열에서 공통된 요소를 배열로 반환합니다.
 * @param {any[]} arr1 - 배열
 * @param {any[]} arr2 - 배열
 * @returns {any[]} - 두 배열에서 공통된 요소
 */
function findCommonElements(arr1, arr2) {}

console.log(findCommonElements([1, 2, 3], [2, 3, 4])); // [2, 3]
console.log(findCommonElements(["a", "b"], ["b", "c"])); // ['b']
console.log(findCommonElements([1, 2, 3], [4, 5, 6])); // []

/**
 * 배열에서 가장 많이 나타나는 요소를 찾는 함수
 * @description 배열에서 가장 많이 나타나는 요소를 찾는 함수 입니다. 배열을 인자로 받아 가장 많이 나타나는 요소를 배열로 반환합니다.
 * 만약 가장 많이 나타나는 요소가 여러개라면 모두 반환합니다.
 * @param {any[]} arr - 배열
 * @returns {any[]} - 가장 많이 나타나는 요소
 */
function findMostFrequent(arr) {}

console.log(findMostFrequent([1, 2, 2, 3, 4, 4, 4])); // [4]
console.log(findMostFrequent(["a", "b", "b", "c", "b"])); // ["b"]
console.log(findMostFrequent([5, 5, 5, 5])); // [5]
console.log(findMostFrequent([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])); // [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
