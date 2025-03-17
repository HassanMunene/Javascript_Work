const students = ["Aziza", "Jamal", "Shirley", "Kanana", "Hassan"];

function findStudent(studentArray, studentName) {
	const answer = studentArray.find((student) => student === studentName)
	return answer;
}

console.log("first option", findStudent(students, "Hassan"));

// second option
function findStudent2(studentArray, studentName) {
	for (let i = 0; i <= studentArray.length -1 ; i++){
		if (studentArray[i] === studentName) {
			console.log("yoooo");
			return studentName;
		}
	}
	return "No match";
}

console.log("second option", findStudent2(students, "assan"));

