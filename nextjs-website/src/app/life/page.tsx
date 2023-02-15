"use client";
import React from 'react';
import { Formik, Form, Field } from 'formik';

export interface Values {
  gender: string;
  age: number;
  zipCode: string;
  term_len: number;
  face_amt: number;
  tobacco: string;
};

interface InitialValues {
  gender: string,
  dobMonth: string,
  dobDay: string,
  dobYear: string,
  zipCode: string,
}

// dateString format = "YYYY-MM-DD"
function getAge(dateString: string) {
  var birthday = +new Date(dateString);
  return ~~((Date.now() - birthday) / (31557600000));
}

const LifeForm: React.FC = () => {
  return (
    <Formik<InitialValues>
      initialValues={{
        gender: '',
        dobMonth: '',
        dobDay: '',
        dobYear: '',
        zipCode: '',
      }}
      onSubmit={(values, actions) => {
        console.log(values);
        const valuesSoFar: Values = {
          gender: values.gender,
          age: getAge(values.dobYear + "-" + values.dobMonth + "-" + values.dobDay),
          zipCode: values.zipCode,
          term_len: 0,
          face_amt: 0,
          tobacco: ''
        }
        actions.setSubmitting(false);
        console.log(valuesSoFar);
      }}
    >
      {({ isSubmitting }) => (
        <Form>
          <Field name="gender">
            {({ field, form }: { field: any; form: any }) => (
              <div>
                <label htmlFor="gender">Gender:</label>
                <input type="radio" id="gender" name="gender" value="M" {...field} />
                M
                <input type="radio" id="gender" name="gender" value="F" {...field} />
                F
                {form.errors.gender && form.touched.gender && <div>{form.errors.gender}</div>}
              </div>
            )}
          </Field>
          <div>
            <label htmlFor="dobMonth">Date of Birth:</label>
            <Field type="text" name="dobMonth">
              {({ field, form }: { field: any; form: any }) => (
                <div>
                  <input id="dobMonth" {...field} placeholder="MM" />
                  {form.errors.dobMonth && form.touched.dobMonth && <div>{form.errors.dobMonth}</div>}
                </div>
              )}
            </Field>
            <Field type="text" name="dobDay">
              {({ field, form }: { field: any; form: any }) => (
                <div>
                  <input id="dobDay" {...field} placeholder="DD" />
                  {form.errors.dobDay && form.touched.dobDay && <div>{form.errors.dobDay}</div>}
                </div>
              )}
            </Field>
            <Field type="text" name="dobYear">
              {({ field, form }: { field: any; form: any }) => (
                <div>
                  <input id="dobYear" {...field} placeholder="YYYY" />
                  {form.errors.dobYear && form.touched.dobYear && <div>{form.errors.dobYear}</div>}
                </div>
              )}
            </Field>
        </div>
        <Field type="text" name="zipCode">
          {({ field, form }: { field: any; form: any }) => (
            <div>
              <label htmlFor="zipCode">ZIP Code:</label>
              <input id="zipCode" {...field} />
              {form.errors.zipCode && form.touched.zipCode && <div>{form.errors.zipCode}</div>}
            </div>
          )}
        </Field>
        <button type="submit" disabled={isSubmitting}>
          Continue
        </button>
      </Form>
    )}
  </Formik>
  );
}

export default LifeForm;