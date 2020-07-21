import React, { Component } from 'react'
import classes from './QuizList.module.css'
import { NavLink } from 'react-router-dom'
import Loader from '../../components/UI/Loader/Loader'
import axios from '../../axios/axios-quiz'

export default class QiuzList extends Component {
    state = {
        quizes: [],
        loading: true
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
            const response = await axios.get('/quizes.json')

            const quizes = []

            Object.keys(response.data).forEach((key, index) => {
                quizes.push({
                    id: key,
                    name: `Тест №${index + 1}`
                })
            })
            this.setState({
                quizes, loading: false
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

                    {
                        this.state.loading
                            ? <Loader />
                            : <ul>
                                {this.renderQiuzes()}
                            </ul>
                    }


                </div>
            </div>
        )
    }
}