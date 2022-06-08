import FieldForm from "./FieldForm"

const CalculatorFields = (props) => {
    console.log(props.state.Сhars)

    let calculatorField = props.state.Сhars.map(
        field => <FieldForm name={field.name} points={field.points} />
    )

    // let calculatorField = props.state.Сhars.map (
    //     field => <FieldForm name = {field.name} points = {field.points}/>
    // )

    return (
        <div>
            {calculatorField}            
        </div>
    )
}

export default CalculatorFields