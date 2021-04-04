import React from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as yup from 'yup';
import s from './LoginFormApp.module.css';

const LoginFormApp = () => {
  return (
    <>
      <Formik
        initialValues={{ email: '', password: '', checkbox: false }}
        validationSchema={yup.object().shape({
          email: yup
            .string()
            .email('Invalid email address')
            .required('Required field'),
          password: yup
            .string()
            .min(8, 'The password must be at least 8 characters long')
            .max(25, 'The password must be at most 25 characters long')
            .required('Required field'),
          checkbox: yup
            .boolean()
            .oneOf([true], 'Please, tick the checkbox')
            .required('Required field'),
        })}
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            console.log(JSON.stringify(values, null, 2));
            alert(
              `😊 Thanks, we've got your data, check the console!\n👀 See you soon! `,
            );
            setSubmitting(false);
          }, 400);
        }}
      >
        <Form className={s.formWrapper}>
          <h1>Sign in to your account</h1>

          <Field
            name="email"
            type="email"
            placeholder="johnnythedesigner@gmail.com"
            className={s.input}
          />
          <ErrorMessage name="email" component="div" className={s.error} />

          <Field
            name="password"
            type="password"
            placeholder="* * * * * * * *"
            className={`${s.input} ${s.password}`}
          />
          <ErrorMessage name="password" component="div" className={s.error} />

          <div className={s.checkboxWrapper}>
            <Field
              name="checkbox"
              type="checkbox"
              id="checkbox"
              className={s.checkbox}
            />
            <label htmlFor="checkbox">Keep me signed in</label>
            <ErrorMessage name="checkbox" component="div" className={s.error} />
          </div>
          <button type="Sign in" className={s.submitBtn}>
            Sign in
          </button>
        </Form>
      </Formik>
    </>
  );
};

export default LoginFormApp;
