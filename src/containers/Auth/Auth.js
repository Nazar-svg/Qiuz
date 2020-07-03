import React, { Component } from 'react'
import classes from './Auth.module.css'
import Button from '../../components/UI/Button/Button'

export default class Auth extends Component {
    loginHandler = () => {

    }
    registerHandler = () => {

    }

    submitHandler = event => {
        event.preventDefault()
    }

    render() {
        return (
            <div className={classes.Auth}>
                <div>
                    <h1>Авторизація</h1>
                    
                    <form onSubmit={this.submitHandler} className={classes.AuthForm}>
                        <input type="text" />
                        <input type="text" />
                        <Button
                          type="success" 
                          onClick={this.loginHandler}
                        >
                            Вхід
                        </Button>

                        <Button
                          type="primary" 
                          onClick={this.registerHandler}
                        >
                            Регістрація
                        </Button>

                    </form>
                </div>
            </div>
        )
    }
}
