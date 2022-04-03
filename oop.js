// OBJECT ORIENTED JAVASCRIPT

// DEFINING THE BLUEPRINT
function Student(fname, lname, age, group) {
  this.fname = fname;
  this.lname = lname;
  this.age = age;
  this.group = group;
}

function createEntry() {
  // SETTING VALUES FOR THE KEYS
  let fname = document.getElementById("fname").value;
  let lname = document.getElementById("lname").value;
  let age = document.getElementById("age").value;
  let group = document.getElementById("group").value;

  // CREATING AN INSTANCE OF THE BLUEPRINT
  const myStudent = new Student(fname, lname, age, group);

  // OUTPUT OF THE INSTANCE
  document.getElementById("output").innerHTML =
    "<h2>STUDENT RECORD:</h2><p>Student name: " +
    myStudent.fname +
    " " +
    myStudent.lname +
    "<BR>Student age: " +
    myStudent.age +
    "<br>Student group: " +
    myStudent.group +
    "</p>";
}
