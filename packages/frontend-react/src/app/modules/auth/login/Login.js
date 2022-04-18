import { Formik } from 'formik';
import { postLogin } from '../auth.service';
import { useNavigate } from 'react-router-dom'

const Login= () =>{
  const navigate = useNavigate();
  return (
    <>
    <div>
      <h1>Login!</h1>
      <Formik
        initialValues={{ username: '', password: '' }}
        validate={values => {
          const errors = {};
          if (!values.username) {
            errors.username = 'Required';
          }
          return errors;
        }}
        onSubmit={(values) => { 
          postLogin(values).then(res =>{
            console.log(res)
            navigate('/');
          }).catch((error)=> {
              console.log('Error: ' + error)
          })
        }}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
          isSubmitting,
        }) => (
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              name="username"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.username}
            />
            {errors.username && touched.username}
            <input
              type="password"
              name="password"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.password}
            />
            {errors.password && touched.password}
            <button type="submit" disabled={isSubmitting}>
              Submit
            </button>
          </form>
        )}
      </Formik>
    </div>
    </>
  );
} 


export default Login;