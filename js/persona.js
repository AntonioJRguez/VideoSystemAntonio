class Person {
  constructor(name, lastname1, lastname2, born, picture) {
    if (new.target === Person) {
      throw new Error("Cannot instantiate abstract class");
    }
    this._name = name;
    this._lastname1 = lastname1;
    this._lastname2 = lastname2;
    this._born = born;
    this._picture = picture;
  }

  get name() {
    return this._name;
  }

  set name(name) {
    this._name = name;
  }

  get dni() {
    return this._dni;
  }

  set dni(dni) {
    if (!/^(\d{8}[A-Z])$/.test(dni)) {
      throw new Error("Invalid DNI format");
    }
    this._dni = dni;
  }

  get birth() {
    return this._birth;
  }

  set birth(birth) {
    this._birth = birth;
  }

  toString() {
    return `Name: ${this._name}, DNI: ${this._dni}, Birth: ${this._birth}`;
  }
}

class Student extends Person {
  constructor(name, dni, birth, degree, grade) {
    super(name, dni, birth);
    if (!["bachelor", "vocational", "others"].includes(degree)) {
      throw new Error("Invalid degree type");
    }
    this._degree = degree;
    this._grade = grade;
  }

  get degree() {
    return this._degree;
  }

  set degree(degree) {
    this._degree = degree;
  }

  get grade() {
    return this._grade;
  }

  set grade(grade) {
    if (typeof grade !== "number" || grade < 0 || grade > 10) {
      throw new Error("Invalid grade format");
    }
    this._grade = grade;
  }

  toString() {
    return `${super.toString()}, Degree: ${this._degree}, Grade: ${this._grade}`;
  }
}

class Professor extends Person {
  constructor(name, dni, birth) {
    super(name, dni, birth);
  }
}

class Course {

  //?Aqui tengo que ponerlo en el constructor o en el set.


  constructor(name, students, tutor) {
    this._name = name;
    this._students = students;
    this._studentsBachellor = [];
    this._studentsMedium = [];
    this._studentsOthers = [];
    this._admittedStudents = [];

    this._students = students;

    if (!(tutor instanceof Professor)) {
      throw new Error("Invalid tutor format");
    }
    this._tutor = tutor;
  }

  get name() {
    return this._name;
  }

  set name(name) {
    this._name = name;
  }

  get students() {
    return this._students;
  }

  doApplication(student) {

    //Variable donde asignaremos la lista de estudiantes correspondiente a lo que haya estudiado el alumno
    let targetList;

    if (student.degree === "bachelor") {
      targetList = this._bachilleratoList;
    } else if (student.degree === "vocational") {
      targetList = this._gradoMedioList;
    } else if (student.degree === "others") {
      targetList = this._otrosEstudiosList;
    }

    // Aqui pondremos la ordenacion pero como no tenemos nungun atributo que nos diga la nota pues nada
  }


  set students(students) {
    //Mira si se ha introducido ya el estudiante.

    if (this._bachilleratoList.includes(student) ||
      this._gradoMedioList.includes(student) ||
      this._otrosEstudiosList.includes(student)) {
      throw new Error("Student already applied to this course");
    }
    else {
      this.doApplication(students);
    }

  }

  get tutor() {
    return this._tutor;
  }

  set tutor(tutor) {
    if (!(tutor instanceof Professor)) {
      throw new Error("Invalid tutor format");
    }
    this._tutor = tutor;
  };

}

let instance = null;

class HighSchool {

  constructor(name) {
    if (instance) {
      return instance;
    }
    this._name = name;
    this._courses = [];
    instance = this;
  }

  get name() {
    return this._name;
  }

  set name(name) {
    this._name = name;
  }

  addCourse(course) {
    if (this._courses.some(c => c.name === course.name)) {
      throw new Error("Course already registered");
    }
    this._courses.push(course);
  }

  removeCourse(course) {
    const index = this._courses.findIndex(c => c.name === course.name);
    if (index === -1) {
      throw new Error("Course not registered");
    }
    this._courses.splice(index, 1);
  }


  *coursesGenerator() {
    yield* this._courses;
  }

  get courses() {
    return this.coursesGenerator();
  }

  *admittedStudentsGenerator() {
    yield* this._courses;
  }

  get courses() {
    return this.admittedStudentsGenerator();
  }


}






let alarcos = new HighSchool();

alarcos.defineProperty();
let carlos;