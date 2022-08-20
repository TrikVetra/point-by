import FieldForm from "./FieldForm"
import style from "./FieldForm.module.css"

const CalculatorFields = (props) => {
    console.log(props.state)

    let calculatorField = props.state.Stats.map(
        field => <FieldForm label = {field.label} points = {field.points} name = {field.name} state = {props.state}/>
    )

    // let calculatorField = props.state.Stats.map (
    //     field => <FieldForm name = {field.name} points = {field.points}/>
    // )

    return (
        <div>
            <div className={style.title}>
                Распределено баллов: {props.state.UsedPoints}/{props.state.MaxPoints}
            </div>
            <div>
                {calculatorField}            
            </div>
        </div>
        
    )
}

export default CalculatorFields