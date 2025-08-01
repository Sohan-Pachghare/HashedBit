function scoresAvg(students) {
    return students.map((student) => {
        const {name, scores} = student;
        const total = scores.reduce((sum, score) => sum + score, 0);
        const average = total / scores.length;
        return { name, average };
    });
}
const students = [
    { name: "Ram", scores: [80, 70, 60] },
    { name: "Mohan", scores: [80, 70, 90] },
    { name: "Sai", scores: [60, 70, 80] },
    { name: "Hemang", scores: [90, 90, 80, 80] },
];

console.log(scoresAvg(students));
