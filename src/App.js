
import { Provider } from 'react-redux';
import Body from './components/Body';
import AppStore from './utils/AppStore';

function App() {
  return (
    <Provider store={AppStore}>
    <div className="App">
     <Body />
       
    </div>
    </Provider>
  );
}

export default App;
