class Interview {

    constructor(id, company, date, student_id, result) {
      this.id = id;
      this.company = company;
      this.date = date;
      this.student_id = student_id;
      this.result = result;
    }
  
    toCSV() {
      return [this.id, this.company, this.date, this.student_id, this.result].join(',');
    }
  }
  
  module.exports = Interview;
  