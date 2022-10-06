import { Provider } from 'react-redux';
import Counter from './components/counter/Counter';
import { store } from './state/store';

function App() {
  return (
    <Provider store={store}>
      <div className="w-screen min-h-screen flex flex-col justify-center items-center bg-slate-100">
        <Counter title={'cake counter'} />
        <Counter title={'ice cream counter'} />
      </div>
    </Provider>
  );
}

export default App;
