import { useFormik } from "formik";

let FieldForm = (props) => {
    return (
        <div>
            <div> Баллов не распределено: {props.state.MaxPoints}</div>
            <div>
                <div>Баллов {props.state.UsedPoints}/{props.state.MaxPoints}</div>
            </div>
        </div>
    )
}

export default FieldForm