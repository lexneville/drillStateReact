import React from 'react';
import './App.css';


// import Human from "./components/Human"

// function App() {
//   return (
//     <div className="App">
//       <Human humanBodyPart="Legs"/>
//     </div>
//   );
// }


const Pet = (props) => {
  return (
    <div>
      <h1>My pet is {props.petName}</h1>
    </div>
  )
}
const Person = (props) => {
  return (
    <div>
      <h1>My name is {props.name}</h1>
      <Pet petName={props.pet} />
    </div>
  )
}
class App extends React.Component {
  render() {
    return (
      <div>
        <h1>This is a class component</h1>
        <Person name="Alex" age="18" pet="Molly" />
        <Person name="Ben" age="21" pet="Sammi" />
        <Person name="Charlie" age="25" pet="Tommy" />
      </div>
    )
  }
}

export default App;