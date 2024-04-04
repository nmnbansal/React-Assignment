import "./App.css";
function App() {
  class Person {
    name: string;
    age: number;
    constructor(name: string, age: number) {
      this.name = name;
      this.age = age;
    }
  }

  class Student extends Person {
    studentId: number;
    course: string;
    semester: number;
    constructor(
      name: string,
      age: number,
      studentId: number,
      course: string,
      semester: number
    ) {
      super(name, age);
      this.studentId = studentId;
      this.course = course;
      this.semester = semester;
    }
  }

  const student1 = new Student("sujeet", 25, 48, "React", 5);
  console.log("Student", student1);

  class Staff extends Person {
    stafId: number;
    department: string;
    position: string;
    constructor(
      name: string,
      age: number,
      stafId: number,
      department: string,
      position: string
    ) {
      super(name, age);
      this.stafId = stafId;
      this.department = department;
      this.position = position;
    }
  }

  let staf1 = new Staff("Tracey River", 29, 12345, "Drafting", "Designer");

  console.log("Staff", staf1);

  return (
    <>
      <h1>TypeScript-III</h1>
    </>
  );
}

export default App;
