class Student {

    constructor(id, name, college, status, dsa_score, webd_score, react_score) {
      this.id = id;
      this.name = name;
      this.college = college;
      this.status = status;
      this.dsa_score = dsa_score;
      this.webd_score = webd_score;
      this.react_score = react_score;
    }
  
    toCSV() {
      return [this.id, this.name, this.college, this.status, this.dsa_score, this.webd_score, this.react_score].join(',');
    }
  }
  
  module.exports = Student;
  