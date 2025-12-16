export default class Student {
    constructor(id, name, courses) {
        Object.defineProperty(this, "id", {
            value: id,
            writable: false,
            configurable: false
        });
        this.name = name;
        this.courses = courses;
    }

    addCourse(courseId, grade) {
        this.courses.push({courseId: courseId, grade: grade});
    }

    getAverage() {
        let total = 0;
        let courseNumber = 0;
        for (course of courses) {
            total += course.grade;
            courseNumber++;
        }
        return total / courseNumber;
    }
}