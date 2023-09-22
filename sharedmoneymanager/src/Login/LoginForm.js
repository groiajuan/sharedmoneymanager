import React from "react";
import { useFormik } from "formik";
import * as Yup from 'yup';

function LoginForm() {

  const loginErrorMsg = "Please provide a valid username and password";

    const formValidations = Yup.object({
      email: Yup.string()
              .email('Invalid email address')
              .required('The email is required'),  
      
      password: Yup.string()
              .min(4, 'Must be 8 characters or less')
              .required('Password is Required')
              
                                        });

    const formik = useFormik({
        initialValues: {
          email: '',
          password: ''
        },
        validationSchema: formValidations,
        onSubmit: values => {
          if (values.email !== "a@a.com" || values.password !== "yes")
          {
            alert(loginErrorMsg);
            return;
          }
        }
      });

      return (
        <div className="principalContainer">
          <h1> Enter your credential </h1>

          <form onSubmit={formik.handleSubmit}>
          <label htmlFor="email">Email Address</label>
          <input
            id="email"
            name="email"
            type="email"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.email}
          />
          {formik.touched.email ? <div>{formik.errors.email}</div> : null}

          <label htmlFor="password">Password</label>
          <input
            id="password"
            name="password"
            type="text"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.password}
          />
          {formik.touched.password ? <div>{formik.errors.password}</div> : null}
  
        <button type="submit">Submit</button>
      </form>

     </div>
      );
    };

export default LoginForm;