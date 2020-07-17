import React, { Component } from 'react'
import classes from './QuizList.module.css'
import { NavLink } from 'react-router-dom'
import axios from 'axios'

export default class QiuzList extends Component {
    state = {
        quizes: [],
    }
    renderQiuzes() {
        return this.state.quizes.map(quiz => {
            return (
                <li
                    key={quiz.id}
                >
                    <NavLink to={"/quiz/" + quiz.id}>
                       {quiz.name}
                    </NavLink>
                </li>
            )
        })
    }
    async componentDidMount() {
        try {
            const response = await axios.get('https://react-qiuz-87cdc.firebaseio.com/quizes.json')

            const quizes = []

            Object.keys(response.data).forEach((key, index) => {
                quizes.push({
                    id: key,
                    name: `Тест №${index + 1}`
                })
            })
            this.setState({
                quizes
            })
        } catch (e) {
            console.log(e)
        }
    }
    render() {
        return (
            <div className={classes.QiuzList}>
                <div>
                    <h1>Список Тестів</h1>

                    <ul>
                        {this.renderQiuzes()}
                    </ul>
                </div>
            </div>
        )
    }
}