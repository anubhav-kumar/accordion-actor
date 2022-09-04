import './App.css';
import Heading from './components/heading';
import UserDetails from './components/user-screen';


function App() {
  return (
    <div className="App">
      <Heading heading='Anubhav Kumar' subHeading='Senior Software Developer, Dreamsetgo' />
      <UserDetails />
    </div>
  );
}

export default App;
