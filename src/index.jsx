import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';

import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <App />
);