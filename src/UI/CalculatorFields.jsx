import FieldForm from "./FieldForm"

const CalculatorFields = (props) => {
    console.log(props.state)

    let calculatorField = props.state.Сhars.map(
        field => <FieldForm name = {field.name} points = {field.points} state = {props.state}/>
    )

    // let calculatorField = props.state.Сhars.map (
    //     field => <FieldForm name = {field.name} points = {field.points}/>
    // )

    return (
        <div>
            <div>
                Распределено баллов: {props.state.UsedPoints}/{props.state.MaxPoints}
            </div>
            <div>
                {calculatorField}            
            </div>
        </div>
        
    )
}

export default CalculatorFields