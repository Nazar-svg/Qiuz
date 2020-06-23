import React from 'react';
import classes from './FinishedQiuz.module.css';

const FinishedQiuz = props => {
    return (
        <div className={classes.FinishedQiuz} >
            <ul>
                <li>
                    <strong>1.</strong>
                   what you
                   <i className={'fa fa-times ' + classes.error} />
                </li>
            </ul>
            <ul>
                <li>
                    <strong>2.</strong>
                   what you
                   <i className={'fa fa-check ' + classes.sucses} />
                </li>
            </ul>
            <p>правильно 3 for 9</p>
            <div>
                <button>пропустити</button>
            </div>
        </div>
    )
}
export default FinishedQiuz