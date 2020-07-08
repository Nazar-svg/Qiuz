import React, { Component } from 'react'
import classes from './QiuzCreator.module.css'
import Button from '../../components/UI/Button/Button'
import Select from '../../components/UI/Select/Select'
import { createControl } from '../../form/formFramework'
import Input from '../../components/UI/Input/Input'

function createOptionControl(number) {
    return createControl({
        label: `Варінт ${number}`,
        errorMesage: 'Значення не може бути пусте!!!',
        id: number
    }, { required: true })
}
function createFormControl() {
    return {
        question: createControl({
            label: 'Введіть питання',
            errorMesage: 'Питання не може бути пусте!'
        }, { required: true }),
        option1: createOptionControl(1),
        option2: createOptionControl(2),
        option3: createOptionControl(3),
        option4: createOptionControl(4)
    }
}
export default class QiuzCreator extends Component {
    state = {
        quiz: [],
        rightAnswerId: 1,
        formControl: createFormControl()
    }


    onSubmitHandler = event => {
        event.preventDefault()
    }
    addQestionHandler = () => {

    }
    createQuizHandler = () => {

    }
    changeHandler = (value, controlName) => {

    }
    renderInput() {
        return Object.keys(this.state.formControl).map((controlName, index) => {
            const control = this.state.formControl[controlName]
            return (
                <React.Fragment key={controlName + index}>
                    <Input
                        valid={control.valid}
                        value={control.value}
                        type={control.type}
                        label={control.label}
                        touched={control.touched}
                        shouldValidate={!!control.validation}
                        errorMesage={control.errorMesage}
                        onChange={event => this.changeHandler(event.turget.value, controlName)}
                    />
                    {index === 0 ? <hr /> : null}
                </React.Fragment>
            )
        })
    }
    selectChangeHandler = event => {
        this.setState({
            rightAnswerId: +event.target.value
        })
    }
    render() {
        const select = <Select 
           label="Вибери правильну відповідь"
           value={this.state.rightAnswerId}
           onChange={this.selectChangeHandler}
           options={[
             {text: 1, value: 1},
             {text: 2, value: 2},
             {text: 3, value: 3},
             {text: 4, value: 4}
           ]}
        />
        return (
            <div className={classes.QiuzCreator}>
                <div>
                    <h1>Створити Тест</h1>

                    <form onSubmit={this.onSubmitHandler}>
                        {this.renderInput()}

                        { select }
                        <Button
                            type="primary"
                            onClick={this.addQestionHandler}
                        >
                            Добавити питання
                    </Button>

                        <Button
                            type="success"
                            onClick={this.createQuizHandler}
                        >
                            Створити тест
                    </Button>
                    </form>
                </div>
            </div>
        )
    }
}