console.log("--- Analytics Report ---");

export const calculateClassAverage = (students, courseId) => {
    let gradeTotal = 0;
    let numberOfStudents = 0;
    for (let st of students) {
        let course = st.courses.find(a => a.courseId === courseId);

        if (course) {
            gradeTotal = gradeTotal + course.grade;
            numberOfStudents++;
        }
    }
    let average = gradeTotal / numberOfStudents;
    console.log("Class Average for Course ", courseId, ":", average);
};

export const findTopStudent = (students) => {

}

export const filterStudents = (students, criteriaFn) => {

}