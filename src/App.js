import './App.css';
import Header from './components/Header/Header';

function App() {
  props = {
    brand: 'Forest Beans'
  };

  return (
    <div className="App">
      <Header props={props} />
    </div>
  );
}

export default App;
