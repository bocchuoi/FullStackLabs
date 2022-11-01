import React from 'react';

class Student extends React.Component {
  constructor(prop) {
    super(prop);
    this.state = {
      studentId: 101300750,
      name: "Truong",
      college: "George Brown, Toronto"
    }
  }

  render() {
    return (
      <div style={{color:"black"}}>
        <h1>Welcome To Full Stack Development - I</h1>
        <h2>Lab 9 Excercise</h2>
        <h3>{this.state.studentId}</h3>
        <h4>{this.state.name}</h4>
        <h5>{this.state.college}</h5>
      </div>
    );
  }
}

export default Student;
