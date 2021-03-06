import React, { Component } from 'react'
import classes from './QiuzCreator.module.css'
import Button from '../../components/UI/Button/Button'
import Select from '../../components/UI/Select/Select'
import { createControl, validate, validateForm } from '../../form/formFramework'
import Input from '../../components/UI/Input/Input'
import { connect } from 'react-redux'
import { createQuizQuestion, finishCreateQuiz } from '../../store/actions/create'

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
 class QiuzCreator extends Component {
    state = {
        isFormValid: false,
        rightAnswerId: 1,
        formControl: createFormControl()
    }


    onSubmitHandler = event => {
        event.preventDefault()
    }
    addQestionHandler = event => {
        event.preventDefault()

        const { question, option1, option2, option3, option4 } = this.state.formControl
        const questionItem = {
            question: question.value,
            id: this.props.quiz.length + 1,
            rightAnswerId: this.state.rightAnswerId,
            answers: [
                { text: option1.value, id: option1.id },
                { text: option2.value, id: option2.id },
                { text: option3.value, id: option3.id },
                { text: option4.value, id: option4.id }
            ]
        }
       
        this.props.createQuizQuestion(questionItem)

        this.setState({
            isFormValid: false,
            rightAnswerId: 1,
            formControl: createFormControl()

        })
    }
    createQuizHandler =  event => {
        event.preventDefault()
        
            this.setState({
                isFormValid: false,
                rightAnswerId: 1,
                formControl: createFormControl()
            })
        this.props.finishCreateQuiz()  
    }

    changeHandler = (value, controlName) => {
        const formControl = { ...this.state.formControl }
        const control = { ...formControl[controlName] }
        control.touched = true
        control.value = value
        control.valid = validate(control.value, control.validation)

        formControl[controlName] = control
        this.setState({
            formControl,
            isFormValid: validateForm(formControl)
        })

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
                        onChange={event => this.changeHandler(event.target.value, controlName)}
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
                { text: 1, value: 1 },
                { text: 2, value: 2 },
                { text: 3, value: 3 },
                { text: 4, value: 4 }
            ]}
        />
        return (
            <div className={classes.QiuzCreator}>
                <div>
                    <h1>Створити Тест</h1>

                    <form onSubmit={this.onSubmitHandler}>
                        {this.renderInput()}

                        {select}
                        <Button
                            type="primary"
                            onClick={this.addQestionHandler}
                            disabled={!this.state.isFormValid}
                        >
                            Добавити питання
                    </Button>

                        <Button
                            type="success"
                            onClick={this.createQuizHandler}
                            // disabled={this.props.quiz.length === 0}
                        >
                            Створити тест
                    </Button>
                    </form>
                </div>
            </div>
        )
    }
}
function mapStateToProps(state) {
    return {
     quiz: state.create.quiz
    }
  }
  function mapDispatchToProps(dispatch) {
    return {
     createQuizQuestion: item => dispatch(createQuizQuestion(item)),
     finishCreateQuiz: () => dispatch(finishCreateQuiz())
    }
  }

export default connect(mapStateToProps, mapDispatchToProps)(QiuzCreator) 