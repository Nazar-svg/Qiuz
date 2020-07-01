import React, { Component } from 'react'
import classes from './QuizList.module.css'
import { NavLink } from 'react-router-dom'
export default class QiuzList extends Component {
    renderQiuzes() {
        return [1, 2, 3].map((qiuz, index) => {
            return (
                <li
                    key={index}
                >
                    <NavLink to={"/qiuz/" + qiuz}>
                        Тест {qiuz}
                    </NavLink>
                </li>
            )
        })
    }
    componentDidMount() {
        console.log('Qiuz ID = ', this.props.match.params.id)
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