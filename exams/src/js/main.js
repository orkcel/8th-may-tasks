let score = prompt("Enter the student's score:");

if (score >= 85 && score <= 100) {
    console.log("A");
} else if (score >= 75 && score < 85) {
    console.log("B");
} else if (score >= 65 && score < 75) {
    console.log("C");
} else if (score >= 51 && score < 65) {
    console.log("D");
} else {
    console.log("F");
}
