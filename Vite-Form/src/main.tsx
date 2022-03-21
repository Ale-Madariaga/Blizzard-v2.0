import { render } from 'react-dom'
import './index.css'
import { BrowserRouter } from "react-router-dom";
import IndexRoutes from './routes/index.routes';
import { store } from '../src/redux/store/store'
import { Provider } from 'react-redux';
import '../src/styles/styles.scss';



render(
  <BrowserRouter>
    <Provider store={store}>
        <IndexRoutes />
    </Provider>
  </BrowserRouter>,
  document.getElementById('root')
)
