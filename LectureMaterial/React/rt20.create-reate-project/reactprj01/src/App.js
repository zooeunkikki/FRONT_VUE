import logo from './logo.svg';
import './App.css';

// containers
import CompStyle from './containers/styled/CompStyle';
import CrudContainer from './containers/crud/CrudContainer';

function App() {
  return (
    <div className="App">
      <CrudContainer></CrudContainer>
    </div>
  );
}

export default App;
