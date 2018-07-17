import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
class Register extends Component {
    renderField(field){
        return(
            <div>
                <label>{field.label}</label>
                <input
                    type="text"
                    {...field.input}
                />
            </div>
        )
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
                        label="Phone"
                        name="phone"
                        component={this.renderField}
                    />
                    <Field 
                        label="Email"
                        name="email"
                        component={this.renderField}
                    />
                    <Field 
                        label="Password"
                        name="password"
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