// 생각한 지점: 뭔가 7로 나누었을 때  나머지를 활용해서 요일을 배정하는 느낌이다.
// 막히는 지점: 1월,2월,3월...매달 요일이 바뀌는데 어떻게 처리해주어야할지 모르겠다. if문을 많이 쓸수도 없구

function solution(a, b) {
  const day = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];
  var answer = day[new Date(2016, a - 1, b).getDay()];
  return answer;
}
