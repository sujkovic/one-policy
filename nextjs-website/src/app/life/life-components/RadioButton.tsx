import React from 'react';
import { Field } from 'formik';

const RadioButton = (props: any) => {
  const { label, name, options, ...rest } = props;
  return (
    <div>
      <label>{label}</label>
      <Field name={name} {...rest} >
        {
          ({ field }: {field: any}) => {
            return options.map(option => {
              return (
                <React.Fragment key={option.key}>
                  <input
                    type='radio'
                    id={option.id}
                    {...field}
                    value={option.value}
                    checked={field.value === option.value}
                  />
                  <label htmlFor={option.id}>{option.key}</label>

                </React.Fragment>
              );
            })
          }
        }
      </Field>
    </div>
  );
};