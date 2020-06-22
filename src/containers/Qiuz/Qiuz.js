import React, { Component } from 'react'
import classes from './Qiuz.module.css'
import ActiveQiuz from '../../components/ActiveQiuz/ActiveQiuz'

class Qiuz extends Component {
    state = {
        question: 'Якого кольору трава?',
        rightAnswerID: 2,
        qiuz: [
            {

                answers: [
                    { text: 'чорна', id: 1 },
                    { text: 'зелена', id: 2 },
                    { text: 'голуба', id: 3 },
                    { text: 'червона', id: 4 }
                ]
            }
        ]
    }
    onAnswerClickHandler = answerID => {
        console.log('answerId: ', answerID)
    }
    render() {
        return (
            <div className={classes.Qiuz} >
                <div className={classes.QiuzWrapper}>
                    <h1>Дайте відповіді на запитання</h1>
                    <ActiveQiuz
                        onAnswerClick={this.onAnswerClickHandler}
                        answers={this.state.qiuz[0].answers}
                        question={this.state.question}
                    />
                </div>
            </div>
        )
    }
}

export default Qiuz