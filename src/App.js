import logo from './logo.svg';

import './App.css';

// Import our components
import Hello from './components/Hello';
import Message from './components/Message';
import Profile from './components/Profile';
import Counter from './components/Counter';

import FuncEvent from './components/FunctionEvent';

function App() {
  return (
    <div className="App">
      
      <Counter />

      <FuncEvent />

      <Hello />
      <Message messagecontent="Message from props!"/>

      <Profile fname="Nathan" lname="Schmitt"/>
      <Profile fname="John" lname="Doe"/>
      <Profile fname="Egg" lname="Head"/>

      <Profile fname="Example" lname="User">
        <h3>Child Element Test</h3>
      </Profile>
    </div>
  );
}

export default App;
