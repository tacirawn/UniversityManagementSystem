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
        
    }

    getAverage() {

    }
}