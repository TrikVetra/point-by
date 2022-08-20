
import { Formik } from "formik";
import React from "react";
//import store from "../Redux/Store";
import style from "./FieldForm.module.css"
import { decrement, increment } from "../Redux/CalcReducer";
import { useDispatch } from 'react-redux'

const FieldForm = (props) => {
  const dispatch = useDispatch()

  const ClickHandler = (e, setFieldValue, values) => {
    let newValue = Number(values.points)
    if (e.target.name === 'plus' && values.points < 15 && props.state.UsedPoints < props.state.MaxPoints) {
      newValue++
      //store.dispatch(increment())
      dispatch(increment(props.name))
    }
    else if ( e.target.name === 'minus' && values.points > 8 && props.state.UsedPoints > 0 ) {
      newValue--
      //store.dispatch(decrement())
      dispatch(decrement(props.name))
    }
    setFieldValue("points", newValue)
  }

  return (
    <div className={style.fieldWrapper}>      
      <div className={style.fieldName}>{props.label}</div>
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
            <button className={style.button} name="minus" type="button" onClick={e => ClickHandler(e, setFieldValue, values)}><b>-</b></button>
              <input
                className={style.fieldPoints}
                type="points"
                name={props.name}
                // onChange={
                //   e => {
                //     e.preventDefault();
                //     const { value } = e.target;
                //     const regex = /^\d{1,2}$/;
                //     if (!value || regex.test(value.toString())) {
                //       setFieldValue("points", value);
                //     }
                //   }
                // }
                onBlur={handleBlur}
                value={values.points}
              />
              <button className={style.button} name="plus" type="button" onClick={e => ClickHandler(e, setFieldValue, values)}><b>+</b></button>
              
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

