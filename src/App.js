import './App.css';
import Header from './Header';
import Main from './Main';
import Backdrop from './Backdrop';

function App() {
  return (
    <div className="app">
      <Backdrop />
      <Header />
      <Main />
    </div>
  );
}

export default App;
