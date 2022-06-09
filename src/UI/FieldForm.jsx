
import { Formik } from "formik";
import React from "react";
import style from "./FieldForm.module.css"

const ClickHandler = (e, setFieldValue, values) => {
  let newValue = Number(values.points)
  if (e.target.name === 'plus' && values.points < 15) {
    newValue++
    
  }
  else if (e.target.name === 'minus' && values.points > 8) newValue--
  setFieldValue("points", newValue)
}

const FieldForm = (props) => {
  return (
    <div className={style.fieldWrapper}>      
      <div className={style.fieldName}>{props.name}</div>
      <Formik
        initialValues={{ points: props.points }}
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
  )
}
export default FieldForm;

