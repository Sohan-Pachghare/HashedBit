const students = [
    {
        student1: {
            subject1: 44,
            subject2: 56,
            subject3: 87,
            subject4: 97,
            subject5: 37
        }
    },
    {
        student2: {
            subject1: 44,
            subject2: 56,
            subject3: 87,
            subject4: 97,
            subject5: 37
        }
    },
    {
        student3: {
            subject1: 44,
            subject2: 56,
            subject3: 87,
            subject4: 97,
            subject5: 37
        }
    }
];


const averages = students.map(studentObj => {
    const [studentName, subjects] = Object.entries(studentObj)[0];
    const marks = Object.values(subjects);
    const average = Math.floor(marks.reduce((sum, mark) => sum + mark, 0) / marks.length);
    
    return {
        [studentName]: {
            average: average
        }
    };
});

console.log(averages);


