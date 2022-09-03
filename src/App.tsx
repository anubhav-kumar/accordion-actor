import './App.css';
import Heading from './components/heading';
import StatefulComponent from './components/stateful-component';
import UserDetails from './components/user-screen';


function App() {
  return (
    <div className="App">
      <Heading heading='Anubhav Kumar' subHeading='Senior Software Developer, Dreamsetgo' />
      <StatefulComponent initialNumber={10} />
      <StatefulComponent initialNumber={0} />
      <UserDetails />
    </div>
  );
}

export default App;
