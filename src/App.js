
import './App.css';
import Answers from './components/Answers/Answers';
import Balls from './components/Balls/Balls';
import Header from './components/Header/Header';

function App() {
  return (
    <div>
      {/* className="App" */}
      <Header></Header>
      <Balls></Balls>
      <Answers></Answers>
    </div>
  );
}

export default App;
