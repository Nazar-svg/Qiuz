import React, { Component } from 'react'
import classes from './Qiuz.module.css'
import ActiveQiuz from '../../components/ActiveQiuz/ActiveQiuz'
import FinishedQiuz from '../../components/FinishedQiuz/FinishedQiuz'

class Qiuz extends Component {
    state = {
        results: {},
        isFinished: false,
        activeQestion: 0,
        answerState: null,
        qiuz: [
            {
                question: 'Якого кольору трава?',
                rightAnswerId: 2,
                id: 1,
                answers: [
                    { text: 'чорна', id: 1 },
                    { text: 'зелена', id: 2 },
                    { text: 'голуба', id: 3 },
                    { text: 'червона', id: 4 }
                ]
            },
            {
                question: 'В якому році заснували Київ?',
                rightAnswerId: 1,
                id: 2,
                answers: [
                    { text: '430', id: 1 },
                    { text: '814', id: 2 },
                    { text: '3000 до н.е', id: 3 },
                    { text: '1990', id: 4 }
                ]
            },
        ]
    }
    onAnswerClickHandler = answerId => {
        if (this.state.answerState) {
            const key = Object.keys(this.state.answerState)[0]
            if (this.state.answerState[key] === 'sucses') {
                return
            }
        }

        const question = this.state.qiuz[this.state.activeQestion]
        const results = this.state.results
        if (question.rightAnswerId === answerId) {
            if(!results[answerId]) {
                results[answerId] = 'sucses'
            }
            this.setState({
                answerState: { [answerId]: 'sucses' },
                results
            })
            const timeout = window.setTimeout(() => {
                if (this.isQiuzFinished()) {
                    this.setState({
                       isFinished: true
                    })
                } else {
                    this.setState({
                        activeQestion: this.state.activeQestion + 1,
                        answerState: null
                    })
                }
                window.clearTimeout(timeout)
            }, 1000)
        } else {
            results[answerId] = 'error'
            this.setState({
                answerState: { [answerId]: 'error' },
                results
            })
        }
    }

    isQiuzFinished() {
        return this.state.activeQestion + 1 === this.state.qiuz.length
    }
    render() {
        return (
            <div className={classes.Qiuz} >
                <div className={classes.QiuzWrapper}>
                    <h1>Дайте відповіді на запитання</h1>
                    {
                        this.state.isFinished
                        ? <FinishedQiuz 
                           results={this.state.results}
                           qiuz={this.state.qiuz}
                        />
                        : 
                        <ActiveQiuz
                        onAnswerClick={this.onAnswerClickHandler}
                        answers={this.state.qiuz[this.state.activeQestion].answers}
                        question={this.state.qiuz[this.state.activeQestion].question}
                        qiuzLenght={this.state.qiuz.length}
                        answerNamber={this.state.activeQestion + 1}
                        state={this.state.answerState}
                    />
                    }
                </div>
            </div>
        )
    }
}

export default Qiuz