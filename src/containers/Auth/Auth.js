import React, { Component } from 'react'
import classes from './Auth.module.css'
import Button from '../../components/UI/Button/Button'
import Input from '../../components/UI/Input/Input'
import is from 'is_js'
import axios from 'axios'

export default class Auth extends Component {
    state = {
        isFormValid: false,
        formControl: {
            email: {
                value: ' ',
                type: 'email',
                label: 'Email',
                errorMesage: 'Введіть правильний email!',
                valid: true,
                touched: true,
                validation: {
                    required: true,
                    email: true
                }
            },
            password: {
                value: '',
                type: 'pasword',
                label: 'Пароль',
                errorMesage: 'Введіть правильний пароль!',
                valid: true,
                touched: true,
                validation: {
                    required: true,
                    minLength: 6
                }
            }
        }
    }

    loginHandler = async () => {
        const authData = {
            email: this.state.formControl.email.value,
            password: this.state.formControl.password.value,
            returnSecureToken: true
        }
        try {
            const response = await axios.post('https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyAPHMV3caQjZbhqx3LtaE30kZ8hgZhtNts', authData)
            console.log(response.data)
        }catch (e){
          console.log(e)
        }
    }
    registerHandler = async () => {
        const authData = {
            email: this.state.formControl.email.value,
            password: this.state.formControl.password.value,
            returnSecureToken: true
        }
        try {
            const response = await axios.post('https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyAPHMV3caQjZbhqx3LtaE30kZ8hgZhtNts', authData)
            console.log(response.data)
        }catch (e){
          console.log(e)
        }
      
    }

    submitHandler = event => {
        event.preventDefault()
    }
    validateControl(value, validation) {
        if (!validation) {
            return true
        }
        let isValid = true
        if (validation.required) {
            isValid = value.trim() !== '' && isValid
        }
        if (validation.email) {
            isValid = is.email(value) && value
        }
        if (validation.minLength) {
            isValid = value.length >= validation.minLength && isValid
        }
        return isValid
    }


    onChangeHandler = (event, controlName) => {
        const formControl = { ...this.state.formControl }
        const control = { ...formControl[controlName] }

        control.value = event.target.value
        control.touched = true
        control.valid = this.validateControl(control.value, control.validation)
        formControl[controlName] = control

        let isFormValid = true
        Object.keys(formControl).forEach(name => {
            isFormValid = formControl[name].valid && isFormValid
        })

        this.setState({
            formControl, isFormValid
        })
    }

    renderInputs() {
        return Object.keys(this.state.formControl).map((controlName, index) => {
            const control = this.state.formControl[controlName]
            return (
                <Input
                    key={controlName + index}
                    valid={control.valid}
                    value={control.value}
                    type={control.type}
                    label={control.label}
                    touched={control.touched}
                    shouldValidate={!!control.validation}
                    errorMesage={control.errorMesage}
                    onChange={event => this.onChangeHandler(event, controlName)}
                />
            )
        })
    }

    render() {
        return (
            <div className={classes.Auth}>
                <div>
                    <h1>Авторизація</h1>

                    <form onSubmit={this.submitHandler} className={classes.AuthForm}>

                        {this.renderInputs()}

                        <Button
                            type="success"
                            onClick={this.loginHandler}
                            disabled={!this.state.isFormValid}
                        >
                            Вхід
                        </Button>

                        <Button
                            type="primary"
                            onClick={this.registerHandler}
                            disabled={!this.state.isFormValid}
                        >
                            Регістрація
                        </Button>

                    </form>
                </div>
            </div>
        )
    }
}
