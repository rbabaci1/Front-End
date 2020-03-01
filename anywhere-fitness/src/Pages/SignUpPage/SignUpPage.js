import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Form, Field, withFormik } from 'formik';
import * as yup from 'yup';
import axios from 'axios';

import Logo from '../../ReusableComponents/Logo';
import Button from '../../ReusableComponents/Button';

const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  p {
    width: 344px;
    font-size: 20px;
    line-height: 23px;
    text-align: center;
    letter-spacing: 0.36px;
    color: #f7f7f7;
  }

  form {
    display: flex;
    flex-direction: column;
    width: 330px;
    margin-top: 30px;

    label {
      display: flex;
      flex-direction: column;
      color: #f7f7f7;
      font-size: 17px;
      font-weight: normal;
      line-height: 20px;
      letter-spacing: 0.36px;
      margin-bottom: 13px;

      input {
        border-radius: 3px;
        box-sizing: border-box;
        border: 2px solid #787777;
        padding: 10px 6px;
        font-size: 17px;
        background: inherit;
        color: #f7f7f7;
        font-family: Ubuntu;
      }

      #show-password {
        flex-direction: row;
        margin: 10px 0 0 0;
        font-size: 11px;
      }
    }
    div {
      margin-top: 150px;
      text-align: center;
    }
  }
`;

function SignUpPage(props) {
  console.log(props);
  return (
    <FormContainer>
      <Logo />

      <p>Create an account by providing the information below</p>

      <Form>
        <label>
          Name
          <Field type='text' name='name' placeholder='Enter name' />
        </label>

        <label>
          Email
          <Field type='email' name='email' placeholder='Enter email' />
        </label>

        <label>
          Password
          <Field type='password' name='password' placeholder='Enter password' />
          {props.values.password.length > 0 && (
            <label id='show-password'>
              <input type='checkbox' />
              Show Password
            </label>
          )}
        </label>

        <div>
          <Button textContent='Sign up!' />
        </div>
      </Form>
    </FormContainer>
  );
}

export default withFormik({
  mapPropsToValues: ({ match }) => ({
    name: match.params.typeName,
    email: '',
    password: ''
  })
})(SignUpPage);
