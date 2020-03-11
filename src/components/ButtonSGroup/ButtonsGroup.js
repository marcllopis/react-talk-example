import React, { Fragment } from 'react';
import Button from '../shared/Button';


const ButtonsGroup = props => (
    <Fragment>
        <Button
            action={props.splitInGroups}
            id={2}
            buttonText="Create Pairs"
        />
        <Button
            action={props.splitInGroups}
            id={3}
            buttonText="Create groups of 3"
        />
        <Button
            action={props.splitInGroups}
            id={props.halfLength}
            buttonText="Create 2 groups"
        />
    </Fragment>
);

export default ButtonsGroup;