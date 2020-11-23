import './App.css';
import Header from './Header';
import Main from './Main';
import Backdrop from './Backdrop';
import { useDataLayerValue } from './DataLayer';

function App() {
  const [{ backdrop }, dispatch] = useDataLayerValue();
  console.log(backdrop);
  return (
    <div className="app">
      {backdrop && <Backdrop />}
      <Header />
      <Main />
    </div>
  );
}

export default App;
