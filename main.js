import Student from './models.js';
import fetchStudents from './database.js';
import calculateClassAverage, { filterStudents } from './analytics.js';
import findTopStudent from './analytics.js';
import filterStudents from './analytics.js';


console.log("Fetching data from database...");
fetchStudents((rawData) => { 
    console.log("Data received!");
    const students = rawData.map(s => new Student(s.id, s.name, s.courses));

    console.log("\nTesting Immutability:");
    console.log("Original ID: ", students[0].id);
    console.log("Attempting to change the ID to 999...");

    students[0].id = 999;

    console.log("Final ID: ", students[0].id);

    console.log("--- Analytics Report ---");
    console.log("Class Average for Course 101: ", calculateClassAverage(students, 101));
    console.log("Top Student: ", findTopStudent(students).name, "(Average: ", findTopStudent(students).getAverage, ")");
    console.log("Students in Course 102: ", filterStudents(students, (student) => student.courses.some(course => course.courseId === 102)));
});




