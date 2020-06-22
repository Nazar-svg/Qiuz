import React from 'react';
import classes from './ActiveQiuz.module.css'
import AnswersList from './AnswersList/AnswersList'

const ActiveQiuz = props => (
    <div className={classes.ActiveQiuz}>
        <p className={classes.Question}>
            <span>
                <strong>2.</strong>&nbsp;
               {props.question}
            </span>
            <p>1 for 3</p>
        </p>
        <AnswersList
            answers={props.answers}
            onAnswerClick={props.onAnswerClick}
        />
    </div>
)
export default ActiveQiuz