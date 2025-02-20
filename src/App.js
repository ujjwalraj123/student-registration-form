import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import './App.css';

const StudentForm = () => {
  const initialValues = {
    name: '',
    age: '',
    email: '',
    course: '',
  };

  const validationSchema = Yup.object({
    name: Yup.string()
      .required('Required')
      .matches(/^[aA-zZ\s]+$/, 'Only alphabets are allowed'),
    age: Yup.number()
      .required('Required')
      .positive('Age must be positive')
      .integer('Age must be integer')
      .min(10, 'Minimum age is 10')
      .max(100, 'Maximum age is 100'),
    email: Yup.string()
      .email('Invalid email address')
      .required('Required'),
    course: Yup.string()
      .required('Please select a course')
  });

  const onSubmit = (values, { resetForm }) => {
    console.log('Form data', values);
    resetForm();
  };

  return (
    <div className="form-container">
      <h1>Student Registration</h1>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
      >
        {({ errors, touched }) => (
          <Form>
            <div className="form-group">
              <label htmlFor="name">Name:</label>
              <Field 
                type="text" 
                id="name" 
                name="name" 
                className={errors.name && touched.name ? 'input-error' : ''}
              />
              <ErrorMessage name="name" component="div" className="error-message" />
            </div>

            <div className="form-group">
              <label htmlFor="age">Age:</label>
              <Field 
                type="number" 
                id="age" 
                name="age" 
                className={errors.age && touched.age ? 'input-error' : ''}
              />
              <ErrorMessage name="age" component="div" className="error-message" />
            </div>

            <div className="form-group">
              <label htmlFor="email">Email:</label>
              <Field 
                type="email" 
                id="email" 
                name="email" 
                className={errors.email && touched.email ? 'input-error' : ''}
              />
              <ErrorMessage name="email" component="div" className="error-message" />
            </div>

            <div className="form-group">
              <label htmlFor="course">Course:</label>
              <Field 
                as="select" 
                id="course" 
                name="course" 
                className={errors.course && touched.course ? 'input-error' : ''}
              >
                <option value="">Select a course</option>
                <option value="Computer Science">Computer Science</option>
                <option value="Mathematics">Mathematics</option>
                <option value="Physics">Physics</option>
                <option value="Engineering">Engineering</option>
              </Field>
              <ErrorMessage name="course" component="div" className="error-message" />
            </div>

            <button type="submit" className="submit-btn">
              Submit
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default StudentForm;