
let marks = [85, 92, 78, 88, 95];  


let total = 0;
for (let i = 0; i < marks.length; i++) {
    total += marks[i];
}


let average = total / marks.length;


let percentage = (total / (marks.length * 100)) * 100;


let grade;
if (percentage >= 90) {
    grade = "A+";
} else if (percentage >= 80) {
    grade = "A";
} else if (percentage >= 70) {
    grade = "B";
} else if (percentage >= 60) {
    grade = "C";
} else {
    grade = "Fail";
}


console.log("Total Marks: " + total);
console.log("Average Marks: " + average);
console.log("Percentage: " + percentage.toFixed(2) + "%");
console.log("Grade: " + grade);
