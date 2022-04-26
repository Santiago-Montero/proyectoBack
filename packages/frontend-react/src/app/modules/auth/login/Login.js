import { Formik } from 'formik';
import { postLogin } from '../auth.service';
import { useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import UserContext from '../../../context/User.context';
import './login.css'
const Login= () =>{
  let navigate = useNavigate();
  const { login } = useContext(UserContext)
  return (
    <>

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
            localStorage.setItem('token', res)
            login(values)
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
        }) => (
          <form onSubmit={handleSubmit} className="box-form">
            <div className="field">
              <label className="label">Username</label>
              <div className="control has-icons-left has-icons-right">
                <input
                    type="text"
                    name="username"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.username}
                />
              </div>
            </div>
            {errors.username && touched.username}
            <div className="field">
              <label className="label">Password</label>
              <div className="control has-icons-left has-icons-right">
                <input
                    type="password"
                    name="password"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.password}
                />
              </div>
            </div>
            {errors.password && touched.password}
            <div className="field is-grouped">
              <div className="control">
                <button className="button is-link">Submit</button>
              </div>
            </div>
          </form>
        )}
      </Formik>
    </>
  );
} 


export default Login;