import Student from './models.js';
import { fetchStudents } from './database.js';
import {calculateClassAverage, findTopStudent, filterStudents} from './analytics.js';


console.log("Fetching data from database...");
fetchStudents((rawData) => { 
    console.log("Data received!");
    const students = rawData.map(s => new Student(s.id, s.name, s.courses));

    console.log("\nTesting Immutability:");
    console.log("Original ID: ", students[0].id);
    console.log("Attempting to change the ID to 999...");

    try{
        students[0].id = 999;
    }catch(error){
        console.log("ID didn't change.")
    }

    console.log("Final ID: ", students[0].id);

    console.log("--- Analytics Report ---");
    console.log("Class Average for Course 101: ", calculateClassAverage(students, 101));
    const topStudent = findTopStudent(students);
    console.log("Top Student: ", topStudent.name, "(Average: ", topStudent.getAverage(), ")");

    const courseStudents = filterStudents(students, (student) => student.courses.some(course => course.courseId === 102));
    const courseStudentsNames = courseStudents.map(s => s.name).join(", ");
    console.log("Students in Course 102: ", courseStudentsNames);
});




