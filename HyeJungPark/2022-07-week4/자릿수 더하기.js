// 문제
/* 자연수 N이 주어지면, 
N의 각 자릿수의 합을 구해서 return 하는 solution 함수를 만들어 주세요.
예를들어 N = 123이면 1 + 2 + 3 = 6을 return 하면 됩니다.
 */

function solution(n) {
  // 입력 : 100,000,000 이하의 자연수
  // 출력 : 각 자릿수를 더한 새로운 수

  // n을 문자열로 변환한 뒤 각 문자를 돌고, 숫자로 변환하여 answer에 누적 합산.
  n = String(n);
  let answer = 0;
  for (let i = 0; i < n.length; i++) {
    answer += Number(n[i]);
  }

  return answer;
}

console.log(solution(987));
