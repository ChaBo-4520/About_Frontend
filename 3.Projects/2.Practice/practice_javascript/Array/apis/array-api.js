// Q1. make a string out of an array
{
  const fruits = ['apple', 'banana', 'orange'];
  const res = fruits.join();
  console.log(res);
  
}

// Q2. make an array out of a string
{
  const fruits = '🍎, 🥝, 🍌, 🍒';
  const res = fruits.split(',')
  console.log(res);
}

// Q3. make this array look like this: [5, 4, 3, 2, 1]
{
  const array = [1, 2, 3, 4, 5];
  const res = array.reverse();
  console.log(res);
}

// Q4. make new array without the first two elements
{
  const array = [1, 2, 3, 4, 5];
  const res = array.slice(2,5);
  console.log(res);
}

class Student {
  constructor(name, age, enrolled, score) {
    this.name = name;
    this.age = age;
    this.enrolled = enrolled;
    this.score = score;
  }
}
const students = [
  new Student('A', 29, true, 45),
  new Student('B', 28, false, 80),
  new Student('C', 30, true, 90),
  new Student('D', 40, false, 66),
  new Student('E', 18, true, 88),
];

// Q5. find a student with the score 90
{
  const res = students.find((student, index)=>student.score == 90);
  console.log(res);
}

// Q6. make an array of enrolled students
{
  const res = students.filter((student)=>student.enrolled);
  console.log(res);
}

// Q7. make an array containing only the students' scores
// result should be: [45, 80, 90, 66, 88]
{
  const res = students.map((student)=> student.score);
  console.log(res);
}

// Q8. check if there is a student with the score lower than 50
{
  // 하나라도 조건에 맞으면 true
  const res = students.some((student)=> student.score <= 50);
  console.log(res);
  // 모두 조건에 맞으면 true
  const res1 = students.every((student)=> student.score <= 50);
  console.log(res1);
}

// Q9. compute students' average score
{
  // reduce는 prev로 이전 리턴값을 받아오고 curr은 현재 array값을 갖는다.(초기값 지정가능)
  // reduceRigth는 오른쪽에서 왼쪽으로 진행
  // 초기값 0부터 각 student에 대해 prev값 + 현재 student.score을 리턴해주면 총 합을 구할 수 있다.
  const res = students.reduce((prev, curr) => prev+curr.score, 0);
  console.log(res/students.length);
}

// Q10. make a string containing all the scores
// result should be: '45, 80, 90, 66, 88'
{
  const res = students.map((student)=>student.score).join();
  console.log(res);
}

// Bonus! do Q10 sorted in ascending order
// result should be: '45, 66, 80, 88, 90'
{
  const res = students.map((student)=>student.score).sort((a,b)=>a-b).join();
  console.log(res);
}