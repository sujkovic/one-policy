"use client";
import React, { useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import styles from './page.module.css'
import { useRouter } from "next/navigation";
import Link from "next/link";
import { format } from 'path';

export interface Values {
  gender: string;
  age: number;
  zipCode: string;
  term_len: number;
  face_amt: number;
  tobacco: string;
};

interface InitialValues {
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
  // M == male, F == female
  const [gender, setGender] = useState('M');
  const [maleActive, setMaleActive] = useState(true);
  const [femaleActive, setFemaleActive] = useState(false);

  const router = useRouter();
  const handleLink = () => {
    router.push('/life/more-details');
  };

  let valuesFinal: Values;

  return (
    <div className={styles.main}>
      <div className={styles.container}>
        <h1 className={styles.title}>Tell us about you.</h1>
        <div className={styles.form}>
          <Formik<InitialValues>
            initialValues={{
              dobMonth: '',
              dobDay: '',
              dobYear: '',
              zipCode: '',
            }}
            onSubmit={(values, actions) => {
              const valuesSoFar: Values = {
                gender: gender,
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
                <div className={styles.genderContainer}>
                  <label className={styles.label}>Gender</label>
                  <div className={styles.genderGroup}>
                    <button
                      onClick={() => {
                        setGender('M');
                        setMaleActive(true);
                        setFemaleActive(false);
                      }}
                      className={
                        maleActive ? 
                        `${styles.buttonLeftFocus} ${styles.buttonLeft}` 
                        : 
                        styles.buttonLeft}>
                        Male
                    </button>

                    <button
                      onClick={() => {
                        setGender('F');
                        setMaleActive(false);
                        setFemaleActive(true);
                      }} 
                      className={
                        femaleActive ? 
                        `${styles.buttonRightFocus} ${styles.buttonRight}` 
                        : 
                        styles.buttonRight
                        }>
                        Female
                    </button>
                  </div>
                </div>

                <div className={styles.dobContainer}>
                  <label className={styles.label} htmlFor="dobMonth">Date of Birth</label>
                  <div className={styles.dobInputContainer}>
                    <Field type="text" name="dobMonth">
                      {({ field }: { field: any }) => (
                        <div>
                          <input className={styles.dobInput} id="dobMonth" {...field} placeholder="MM" />
                          <ErrorMessage name='dobMonth' />
                        </div>
                      )}
                    </Field>
                    <Field type="text" name="dobDay">
                      {({ field }: { field: any }) => (
                        <div>
                          <input className={styles.dobInput} id="dobDay" {...field} placeholder="DD" />
                          <ErrorMessage name='dobDay' />
                        </div>
                      )}
                    </Field>
                    <Field type="text" name="dobYear">
                      {({ field }: { field: any }) => (
                        <div>
                          <input className={styles.dobInput} id="dobYear" {...field} placeholder="YYYY" />
                          <ErrorMessage name='dobYear' />
                        </div>
                      )}
                    </Field>
                  </div>
              </div>

              <Field type="text" name="zipCode">
                {({ field }: { field: any }) => (
                  <div className={styles.zipCodeContainer}>
                    <label className={styles.label} htmlFor="zipCode">ZIP Code</label>
                    <input className={styles.zipCodeInput} id="zipCode" {...field} />
                    <ErrorMessage name='zipCode' />
                  </div>
                )}
              </Field>
              
              <div className={styles.continueContainer}>
                {/* <button className={styles.continue} type="submit" disabled={isSubmitting} 
                onClick={(e) => {
                  handleLink(e);
                }}
                >
                  Continue
                </button> */}
                <Link className={styles.continue} onClick={(values) => {
                  
                }} 
                // href={{
                //   pathname: '/life/more-details',
                //   query: {
                //     values: valuesFinal.gender + " " + valuesFinal.age + " " + valuesFinal.zipCode
                //   }
                // }}>
                href="/life/more-details">
                  Continue
                </Link>
              </div>

            </Form>
          )}
          </Formik>
        </div>
      </div>
    </div>
  );
}

export default LifeForm;