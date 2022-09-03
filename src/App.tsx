import './App.css';
import Accordion from './components/accordion';
import Heading from './components/heading';
import StatefulComponent from './components/stateful-component';

function App() {
  return (
    <div className="App">
      <Heading heading='Anubhav Kumar' subHeading='Senior Software Developer, Dreamsetgo' />
      <StatefulComponent initialNumber={10} />
      <StatefulComponent initialNumber={0} />
      <Accordion>
        <h3>Hello World!!</h3>
      </Accordion>
    </div>
  );
}

export default App;
