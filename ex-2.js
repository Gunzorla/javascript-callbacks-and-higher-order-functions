//Exercise #2: At Least Five Function

function atLeastFive(array, operation) {
  const passingStudents = array.filter(score => score > 70).length;
  return operation(passingStudents);
}

function passOrFail(passingCount) {
  return passingCount >= 5 ? 'ผ่านเกณฑ์' : 'ไม่ผ่านเกณฑ์';
}
const studentScoresRoom1 = [90, 40, 67, 80, 100, 15, 86, 12, 99, 67];
const studentScoresRoom2 = [78, 98, 23, 15, 40, 12, 40, 67, 80, 100];
const studentScoresRoom3 = [67, 80, 100, 15, 12, 40, 67, 80, 100, 67];

// Using `atLeastFive` function here
function checkPassCondition(studentScores, callback) {
  return atLeastFive(studentScores, callback);
}


console.log("นักเรียนห้องที่ 1: " + checkPassCondition(studentScoresRoom1, passOrFail));
console.log("นักเรียนห้องที่ 2: " + checkPassCondition(studentScoresRoom2, passOrFail));
console.log("นักเรียนห้องที่ 3: " + checkPassCondition(studentScoresRoom3, passOrFail));
