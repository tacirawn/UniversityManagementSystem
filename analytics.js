console.log("--- Analytics Report ---");

export const calculateClassAverage = (students, courseId) => {
    let gradeTotal = 0;
    let numberOfStudents = 0;
    for (let st of students) {
        let course = st.courses.find(a => a.courseId === courseId);

        if (course) {
            gradeTotal += course.grade;
            numberOfStudents++;
        }
    }
    let average = gradeTotal / numberOfStudents;
    console.log("Class Average for Course ", courseId, ":", average);
};

export const findTopStudent = (students) => {
    let topStudentName = "";
    let topGrade = students.reduce((acc, st) => {
        if (st.getAverage > acc) {
            acc = st.getAverage;
            topStudentName = st.name;
        }
        return acc;
    }, 0);

    console.log("Top Student: ", topStudentName, " (Average: ", topGrade, ")");
}

export const filterStudents = (students, criteriaFn) => {
    
}