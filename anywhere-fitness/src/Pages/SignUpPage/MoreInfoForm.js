import React from 'react';
import { Form, withFormik, Field } from 'formik';
import * as Yup from 'yup';
import styled from 'styled-components';

import Logo from '../../ReusableComponents/Logo';
import Button from '../../ReusableComponents/Button';
import { FormDefaultStyle } from '../ReusableStyling/FormDefaultStyle';
import { ErrorMessageStyle } from '../ReusableStyling/ErrorMessageStyle';

import { toggleActive, removeActive } from '../../functionsLibrary/library';

const MoreInfoFormContainer = styled(FormDefaultStyle)`
  .button {
    text-align: center;
    margin-top: 70px;
  }
  .select {
    width: fit-content;

    span {
      display: inline-block;
      padding: 8px 3px;
      width: 30px;
      text-align: center;
      margin: 2px 8px 0 0;
      border: 2px solid #787777;
      border-radius: 3px;
      cursor: pointer;
    }
    .active {
      color: #000000;
      background: #f7f7f7;
    }

    @media only screen and (min-width: 500px) {
      margin-top: 3px;
      span {
        width: 45px;
        padding: 17px 3px;
      }
    }
  }
  #experience {
    padding: 8px 0;
    width: 40px;
    text-align: center;
    @media only screen and (min-width: 500px) {
      width: 55px;
      font-size: 24px;
    }
  }
  #experience::-webkit-outer-spin-button,
  #experience::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
`;

function MoreInfoForm({ setValues, values, touched, errors, isSubmitting }) {
  return (
    <MoreInfoFormContainer>
      <Logo />
      <p>Tell us more about you!</p>

      <Form>
        <label>
          Exercise you specialize in
          <Field
            type='text'
            name='specialty'
            placeholder='Exercise you specialize in'
          />
          {touched.specialty && errors.specialty && (
            <ErrorMessageStyle>{errors.specialty}</ErrorMessageStyle>
          )}
        </label>

        <label>
          Years of Experience
          <Field type='number' name='yearsOfExperience' id='experience' />
          {touched.yearsOfExperience && errors.yearsOfExperience && (
            <ErrorMessageStyle>{errors.yearsOfExperience}</ErrorMessageStyle>
          )}
        </label>

        <label>
          Are You a Certified?
          <div
            className='select'
            onClick={event => toggleActive(event, setValues, values)}
          >
            <span id='yes'>Yes</span>
            <span id='no' className='selected'>
              No
            </span>
          </div>
        </label>

        <div className='button'>
          <Button
            textContent='Continue'
            type='submit'
            isSubmitting={isSubmitting}
          />
        </div>
      </Form>
    </MoreInfoFormContainer>
  );
}

export default withFormik({
  mapPropsToValues: () => ({
    specialty: '',
    yearsOfExperience: 0,
    isCertified: false
  }),
  handleSubmit: (values, formikBag) => {
    const { props, resetForm } = formikBag;
    const { firstFormValues } = props.location.state;
    // concat the first form values with the current
    values = { ...firstFormValues, ...values };

    setTimeout(() => {
      console.log(values);
      resetForm();
      removeActive();
    }, 3000);

    // console.log(values);
    // console.log(formikBag);
    // removeActive();
    // resetForm();
  },
  validationSchema: Yup.object().shape({
    specialty: Yup.string()
      .required('Please enter a specialty.')
      .matches(/^[a-zA-Z]+$/, 'Must contain alphabet letters only.'),
    yearsOfExperience: Yup.number().required(
      'Please enter the number of years of experience.'
    )
  })
})(MoreInfoForm);
