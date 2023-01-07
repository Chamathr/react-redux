import logo from './logo.svg';
import './App.css';
import Redux from '../src/components/redux';
import { Provider as ReduxProvider } from "react-redux";
import { store } from './redux/store';

function App() {
  return (
    <>
      <ReduxProvider store={store}>
        <Redux />
      </ReduxProvider>
    </>
  );
}

export default App;
