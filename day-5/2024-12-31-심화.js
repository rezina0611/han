/**
 * 생성자 함수를 활용하여 Stack 객체를 작성하세요
 *
 * 1. push 메서드를 통해 요소를 추가할 수 있어야 합니다.
 * 2. pop 메서드를 통해 요소를 제거할 수 있어야 합니다.
 * 3. peek 메서드를 통해 마지막 요소를 조회할 수 있어야 합니다.
 * 4. isEmpty 메서드를 통해 스택이 비어있는지 확인할 수 있어야 합니다.
 * 5. size 메서드를 통해 스택의 크기를 조회할 수 있어야 합니다.
 *
 */
function Stack() {}

const stack = new Stack();
stack.push(1);
stack.push(2);
stack.push(3);
console.log(stack.pop()); // 3
console.log(stack.peek()); // 2
console.log(stack.isEmpty()); // false
console.log(stack.size()); // 2
