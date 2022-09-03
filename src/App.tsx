import './App.css';
import UserAccordion from './components/accordion';
import Heading from './components/heading';
import StatefulComponent from './components/stateful-component';
import data from './data/celebrities';


function App() {
  return (
    <div className="App">
      <Heading heading='Anubhav Kumar' subHeading='Senior Software Developer, Dreamsetgo' />
      <StatefulComponent initialNumber={10} />
      <StatefulComponent initialNumber={0} />
      {data.map((dt, idx) => <UserAccordion {...dt} />)}
    </div>
  );
}

export default App;
