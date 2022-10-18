import './App.css';
import Header from "./components/Header";
import HomePage from "./pages/HomePage";
import TaskList from "./pages/task/TaskList";

import { Provider } from 'react-redux'
import store from './redux/store/configure-store'
import Router from './router'

function App() {
  return (
      <Provider store={store}>
      <div className="App">
        <Router />
    </div>
      </Provider>
  );
}

export default App;
