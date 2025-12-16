import Student from './models.js';
import fetchStudents from './database.js';
import calculateClassAverage, { filterStudents } from './analytics.js';
import findTopStudent from './analytics.js';
import filterStudents from './analytics.js';


console.log("Fetching data from database...");
console.log("Data received!");

fetchStudents()

