import logo from './logo.svg';
import './App.css';
import Redux from '../src/components/redux';
import { Provider } from 'react-redux';
import store from './redux/store';

function App() {
  return (
    <>
      <Provider store={store}>
        <Redux />
      </Provider>
    </>
  );
}

export default App;
