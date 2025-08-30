let marks = [45, 78, 89, 56, 92];

let highest = marks[0];  // Step 1: assume first element is highest

for (let i = 1; i < marks.length; i++) {
    if (marks[i] > highest) {
        highest = marks[i];  // update highest if current mark is greater
    }
}

console.log("Highest Mark is: " + highest);
