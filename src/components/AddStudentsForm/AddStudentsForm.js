import React from 'react';
import Button from '../shared/Button';


const AddStudentsForm = props => (
    <form onSubmit={props.getSingleStudent}>
        <input
            value={props.studentName}
            onChange={props.addStudent}
            placeholder="Add a student..."
        />
        <Button className="add-button" buttonText="Add"/>
    </form>
);

export default AddStudentsForm;