import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

// project imports
import App from './App';
import store from './store';

// css
import 'src/shared/styles/css';

async function enableMocking() {
  if (import.meta.env.NODE_ENV === 'development') return;

  const { worker } = await import('src/shared/mocks/browser');
  return worker.start();
}

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

enableMocking().then(() => {
  root.render(
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  );
});
