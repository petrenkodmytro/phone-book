import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from 'components/App';
import { ThemeProvider } from 'styled-components';
// redux
import { Provider } from 'react-redux';
import { persistor, store } from 'redux/store';
import { PersistGate } from 'redux-persist/integration/react';
import { BrowserRouter } from 'react-router-dom';

const theme = {
  colors: {
    main: '#212624',
    bgc: '#c8c7cd',
    accentLight: '#93AEF1',
    accentDark: '#4650F1',
    error: '#720017',
  },
};

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* Після створення стору необхідно зв'язати його з компонентами React, щоб
    вони могли отримувати доступ до стору та його методів. Для цього у
    бібліотеці React Redux є компонент Provider, котрий чекає однойменний пропс
    store. Для того щоб будь-який компонент у додатку міг використовувати стор,
    обертаємо Provider все дерево компонентів. */}
    <Provider store={store}>
      {/* PersistGate перевірка LocalStorage */}
      <PersistGate loading={null} persistor={persistor}>
        <ThemeProvider theme={theme}>
          <BrowserRouter basename="goit-react-hw-08-phonebook">
            <App />
          </BrowserRouter>
        </ThemeProvider>
      </PersistGate>
    </Provider>
  </React.StrictMode>
);
