import React from 'react';
import classes from './FinishedQiuz.module.css';
import Button from '../UI/Button/Button'
import {Link} from 'react-router-dom'
const FinishedQiuz = props => {
    const successCount = Object.keys(props.results).reduce((total, key) => {
        if (props.results[key] === 'success') {
            total++
        }
        return total
    }, 0)

    return (
        <div className={classes.FinishedQiuz} >
            <ul>
                {props.quiz.map((qiuzItem, index) => {
                    const cls = [
                        'fa',
                        props.results[qiuzItem.id] === 'error' ? 'fa-times' : 'fa-check',
                        classes[props.results[qiuzItem.id]]
                    ]
                    return (
                        <li
                            key={index}
                        >
                            <strong>{index + 1}</strong>.&nbsp;
                            {qiuzItem.question}
                            <i className={cls.join(' ')} />
                        </li>
                    )
                }
                )}
            </ul>
            <p>правильно {successCount} for {props.quiz.length}</p>
            <div>
                <Button onClick={props.onRetry} type='primary'>Повторити</Button>
                <Link to="/">
                <Button type='success'>Перейти в список тестів</Button>
                </Link>
                
            </div>
        </div>
    )
}
export default FinishedQiuz