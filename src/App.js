
import './App.css';
import FieldForm from './UI/FieldForm';
import CalculatorFields from './UI/CalculatorFields';

function App(props) {
  return (
    <div className="App">
      <CalculatorFields state = {props.state.calc}/>
    </div>
  );
}

export default App;
