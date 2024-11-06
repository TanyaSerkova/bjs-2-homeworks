function Student(name, gender, age) {
  this.name = name;
  this.gender = gender;
  this.age = age;
  this.marks = [];
};

Student.prototype.setSubject = function (subjectName) {
  this.subject = subjectName;
}

Student.prototype.addMarks = function (...marks) {
    if (this.hasOwnProperty('marks') === true) {
        this.marks.push(...marks);
    }
    } 

Student.prototype.getAverage = function () {
  if (this.hasOwnProperty('marks') === true && this.marks.length > 0 ) {
    return (this.marks.reduce(function (acc, number) {
        return acc + number}, 0) / this.marks.length)
  } else return 0
}

Student.prototype.exclude = function (reason) {
  delete this.marks;
  delete this.subject;
  this.excluded = reason;
}
