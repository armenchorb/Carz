import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
class Register extends Component {
    renderField(field){
        <div>
            <label>{field.label}</label>
            <input
                type="text"
                {...field.input}
            />
        </div>

    }
    render(){
        return (
            <div>
                <form>
                    <Field
                        label="First Name"
                        name="firstName"
                        component={this.renderField}
                    />
                    <Field 
                        label="Last Name"
                        name="lastName"
                        component={this.renderField}
                    />
                    <Field 
                        label="Post Content"
                        name="content"
                        component={this.renderField}
                    />
                </form>
            </div>
        )
    }
}

function validate(values){
    const errors = {}
    return errors;  
}
export default reduxForm({
    validate,
    form:'RegisterForm'
 })(Register)