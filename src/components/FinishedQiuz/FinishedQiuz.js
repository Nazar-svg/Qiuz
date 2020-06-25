import React from 'react';
import classes from './FinishedQiuz.module.css';

const FinishedQiuz = props => {
    return (
        <div className={classes.FinishedQiuz} >
            <ul>
                {props.qiuz.map(( qiuzItem, index) => {
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
            <p>правильно 3 for {props.qiuz.lenght}</p>
            <div>
                <button>пропустити</button>
            </div>
        </div>
    )
}
export default FinishedQiuz