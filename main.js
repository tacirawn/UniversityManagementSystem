import Student from './models.js';
import fetchStudents from './database.js';
import calculateClassAverage, { filterStudents } from './analytics.js';
import findTopStudent from './analytics.js';
import filterStudents from './analytics.js';


console.log("Fetching data from database...");
fetchStudents((rawData) => { 
    console.log("Data received!");
    const students = rawData.map(s => new Student(s.id, s.name, s.courses));

    console.log("Testing Immutability:");
    console.log("")

});




