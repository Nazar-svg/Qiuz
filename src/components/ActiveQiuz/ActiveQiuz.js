import React from 'react';
import classes from './ActiveQiuz.module.css'
import AnswersList from './AnswersList/AnswersList'

const ActiveQiuz = props => (
    <div className={classes.ActiveQiuz}>
        <p className={classes.Question}>
            <span>
                <strong>{props.answerNamber}.</strong>&nbsp;
               {props.question}
            </span>
            <small>{props.answerNamber} з {props.qiuzLenght}</small>
        </p>
        <AnswersList
            state={props.state}
            answers={props.answers}
            onAnswerClick={props.onAnswerClick}
        />
    </div>
)
export default ActiveQiuz