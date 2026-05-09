// Q1 - Mark sheet
const marks = { Math: 85, English: 78, Science: 92, Computer: 88, History: 74 };
const subjects = Object.keys(marks);
let total = 0;
for (let i = 0; i < subjects.length; i++) total += marks[subjects[i]];
const maxTotal = subjects.length * 100;
const percentage = (total / maxTotal) * 100;
const grade = percentage >= 90 ? "A" : percentage >= 80 ? "B" : percentage >= 70 ? "C" : percentage >= 60 ? "D" : "F";

document.getElementById("output").innerHTML += `<h2>MARK SHEET</h2>`;
document.getElementById("output").innerHTML += `<p><b>Total:</b> ${total}/${maxTotal}</p>`;
document.getElementById("output").innerHTML += `<p><b>Percentage:</b> ${percentage.toFixed(2)}%</p>`;
document.getElementById("output").innerHTML += `<p><b>Grade:</b> ${grade}</p>`;

let q1Table = `<table border="1" cellpadding="6" cellspacing="0"><tr><th>Subject</th><th>Marks</th></tr>`;
for (let i = 0; i < subjects.length; i++) {
  q1Table += `<tr><td>${subjects[i]}</td><td>${marks[subjects[i]]}</td></tr>`;
}
q1Table += `</table><hr/>`;
document.getElementById("output").innerHTML += q1Table;

// Q2 - Reduce (console)
console.log("Q2 Sum:", [1, 2, 3, 4].reduce((a, b) => a + b));
console.log("Q2 Sum (init 10):", [1, 2, 3, 4].reduce((a, b) => a + b, 10));
console.log("Q2 Multiply:", [1, 2, 3, 4].reduce((a, b) => a * b, 1));
console.log("Q2 done");

document.getElementById("output").innerHTML += `<hr/><p><b>Q2:</b> Check console (reduce)</p><hr/>`;

// Q3 - Reverse array (console)
const q3 = ["a", "b", "c", "d"].reverse();
console.log("Q3:", q3);

document.getElementById("output").innerHTML += `<p><b>Q3:</b> Check console (reverse)</p><hr/>`;

// Q4 - Merge arrays (console)
const q4 = [...[1, 2, 3], ...[4, 5]];
console.log("Q4:", q4);

document.getElementById("output").innerHTML += `<p><b>Q4:</b> Check console (spread merge)</p><hr/>`;

// Q5 - Reverse words
const q5 = "hello world".split(" ").reverse().join(" ");
console.log("Q5:", q5);

document.getElementById("output").innerHTML += `<p><b>Q5 Output:</b> ${q5}</p><hr/>`;

// Q6 - Hoisting notes
document.getElementById("output").innerHTML += `<p><b>Q6:</b> Hoisting notes in code comments.</p><hr/>`;

// Q7
document.getElementById("output").innerHTML += `<p><b>Q7:</b> Real-life hoisting break notes in code comments.</p><hr/>`;

// Q8 - Dynamic email template (console)
const generateEmailTemplate = (type, data) => {
  if (type === "welcome") return `Welcome ${data.name}!`;
  if (type === "order") return `Hi ${data.name}, order #${data.orderId} is confirmed.`;
  if (type === "reset") return `Hi ${data.name}, reset code: ${data.resetCode}`;
  return `Hello ${data.name}`;
};

console.log("Q8 Welcome:", generateEmailTemplate("welcome", { name: "Ayesha" }));
console.log("Q8 Order:", generateEmailTemplate("order", { name: "Ayesha", orderId: 123 }));
console.log("Q8 Reset:", generateEmailTemplate("reset", { name: "Ayesha", resetCode: "A1B2" }));

document.getElementById("output").innerHTML += `<p><b>Q8:</b> Email templates shown in console.</p><hr/>`;


