import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import { createUser } from '../actions'
class Register extends Component {
    renderField(field){
        return(
            <div>
                <label>{field.label}</label>
                <input
                    type="text"
                    {...field.input}
                />
                {field.meta.touched ? field.meta.error : ''}
            </div>
        )
    }
    onSubmit(values){
        // console.log(values)
        this.props.createUser(values);
    }
    render(){
        const { handleSubmit } = this.props;
        return (
            <div>
                <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
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
                    <button type="submit"> Submit </button>
                </form>
            </div>

        )
    }
}

function validate(values){
    const errors = {}
    if(!values.firstName){
        errors.firstName = "First Name is required"
    }
    if(!values.lastName){
        errors.lastName = "Last Name is required"
    }
    if(!values.phone){
        errors.phone = "Phone number is required"
    }
    if(!values.email){
        errors.email = "Email is required"
    }
    return errors;  
}
export default reduxForm({
    validate,
    form:'RegisterForm'
 })(
    connect(null,{ createUser })(Register)
);