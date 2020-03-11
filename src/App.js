import React, { Component } from 'react';

import AddStudentsForm from './components/AddStudentsForm/AddStudentsForm';
import Button from './components/shared/Button';
import ButtonsGroups from './components/ButtonSGroup/ButtonsGroup';

import { fullClass } from './utils/students';
import { shuffle } from './utils/functions';
import './App.css';


class App extends Component {

  state = {
    students: [],
    splittedGroups: [],
    studentName: ""
  }

  getFullClass = () => this.setState({ students: fullClass })

  addStudent = e => this.setState({ studentName: e.target.value })

  getSingleStudent = e => {
    e.preventDefault();
    let studentsCopy = [...this.state.students]
    studentsCopy.push(this.state.studentName)
    this.setState({ students: studentsCopy, studentName: "" })
  }

  splitInGroups = e => {
    let copyOfStudents = [...this.state.students];
    shuffle(copyOfStudents)
    let arrayHelper = [];
    while (copyOfStudents.length > 0) arrayHelper.push(copyOfStudents.splice(0, e.target.id))
    this.setState({ splittedGroups: arrayHelper })
  }

  render() {
    return (
      <div>
        <div className="starting-form-container">
          <div className="add-students-form">
            <AddStudentsForm
              getSingleStudent={this.getSingleStudent}
              studentName={this.state.studentName}
              addStudent={this.addStudent}
            />
          </div>
          <div>
            <Button
              action={this.getFullClass}
              buttonText={"Upload full class"}
              className="add-button"
            />
          </div>
        </div>
        <div className="show-students">
          {this.state.students.map(student => <p className="student-name">* {student}</p>)}
        </div>
        {this.state.students.length > 0 &&
          <div className="split-container">
            <hr />
            <div className="split-button-options">
              <ButtonsGroups
                splitInGroups={this.splitInGroups}
                halfLength={this.state.students.length / 2}
              />
            </div>
            <hr />
            <div className="groups-displayed">
              {this.state.splittedGroups.map(group =>
                <p className="student-name">{group.map(person =>
                  ` - ${person}`)}
                </p>
              )}
            </div>
          </div>
        }
      </div>
    )
  }
}


export default App;
