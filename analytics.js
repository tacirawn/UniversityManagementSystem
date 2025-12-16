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
    return average;
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

    return topStudentName;
}

export const filterStudents = (students, criteriaFn) => {
    let filteredList = [];
    for (let st of students) {
        if (criteriaFn(st)) {
            filteredList.push();
        }
    }
    return filteredList;
}