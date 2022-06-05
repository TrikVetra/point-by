
import './App.css';
import FieldForm from './UI/FieldForm';

function App(props) {
console.log (props)
  return (
    <div className="App">
      <FieldForm state = {props.state.calc}/>
    </div>
  );
}

export default App;
