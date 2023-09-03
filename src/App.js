import logo from './logo.svg';

import './App.css';

// Import our components
import Hello from './components/Hello';
import Message from './components/Message';
import Profile from './components/Profile';

function App() {
  return (
    <div className="App">
      <Hello />
      <Message />
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
