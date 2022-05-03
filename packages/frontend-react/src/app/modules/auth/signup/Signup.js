import { Formik } from 'formik';
import { postSignup } from '../auth.service';
import { useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import UserContext from '../../../context/User.context';
import './signup.css'

const Signup = () =>{
  let navigate = useNavigate();
  const { login } = useContext(UserContext)
  return (
    <>
      <Formik
        initialValues={{
            username: '',
            password: '',
            email: '',
            phone: '',
            firstName:'',
            lastName:'',
            avatar:''
         }}
        validate={values => {
          const errors = {};
          if (!values.username) {
            errors.username = 'Required';
          }
          return errors;
        }}
        onSubmit={(values) => { 
          console.log(values)
          postSignup(values).then(res =>{
            localStorage.setItem('token', res)
            login(values)
            navigate('/');
            console.log(res)
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
            <div className='box-inputs'>
                <div className='box-inputs-container box-username-pass'>
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
                </div>
                <div className='box-inputs-container box-first-last'>
                    <div className="field">
                        <label className="label">First Name</label>
                        <div className="control has-icons-left has-icons-right">
                            <input
                                type="text"
                                name="firstName"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.firstName}
                            />
                        </div>
                    </div>
                    {errors.firstName && touched.firstName}
                    <div className="field">
                        <label className="label">Last Name</label>
                        <div className="control has-icons-left has-icons-right">
                            <input
                                type="text"
                                name="lastName"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.lastName}
                            />
                        </div>
                    </div>
                    {errors.lastName && touched.lastName}
                </div>
                <div className='box-inputs-container box-first-last'>
                    <div className="field">
                        <label className="label">Email</label>
                        <div className="control has-icons-left has-icons-right">
                            <input
                                type="email"
                                name="email"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.email}
                            />
                        </div>
                    </div>
                    {errors.email && touched.email}
                    <div className="field">
                        <label className="label">Phone</label>
                        <div className="control has-icons-left has-icons-right">
                            <input
                                type="number"
                                name="phone"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.phone}
                            />
                        </div>
                    </div>
                    {errors.phone && touched.phone}
                </div>
                <div className="field">
                    <label className="label">Avatar</label>
                    <div className="control has-icons-left has-icons-right">
                        <input
                            type="text"
                            name="avatar"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.avatar}
                        />
                    </div>
                </div>
            </div>
            <div className="field is-grouped box-form-submit">
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


export default Signup;