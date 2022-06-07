// import { useFormik, replace } from "formik";

// import React from "react";

import { Formik } from "formik";

import React from "react";

const ClickHandler = (e,setFieldValue, values) => {
    let newValue = Number(values.points) 
    if (e.target.name === 'plus') newValue++ 
    else if (e.target.name === 'minus') newValue--
    setFieldValue("points", newValue)
}

const FieldForm = () => (
    <div>
      <Formik
        initialValues={{ points: '8'}}
        validate={values => {
            const errors = {};
            if (values.points && !/^\d+$/i.test(values.points)) { //!!! Валидация не работает т.к. онклик не разрешает вводиться этим символам.
              errors.points = 'Это не число';
            }
            return errors;
          }}
      >
        {({
          values,
          errors,
          handleChange,
          handleBlur,
          handleSubmit,
          setFieldValue
        }) => (
          <form onSubmit={handleSubmit}>
            <div>
                <input
                    type="points"
                    name="points"
                    onChange={
                        e => {
                            e.preventDefault();
                            const { value } = e.target;
                            const regex = /^\d{1,2}$/;
                            if (!value || regex.test(value.toString())) {
                              setFieldValue("points", value);
                            }
                        }
                    }
                    onBlur={handleBlur}
                    value={values.points}
                />
                <button name="plus" type="button" onClick={e => ClickHandler(e, setFieldValue, values)}>+</button>
                <button name="minus" type="button" onClick={e => ClickHandler(e, setFieldValue, values)}>-</button>
            </div>
            <div>
                {errors.points}
            </div>
            

          </form>
        )}
      </Formik>
    </div>
  );
  
  export default FieldForm;

