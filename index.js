import React from 'react';
import ReactDOM from 'react-dom';
import { PersistGate } from 'redux-persist/integration/react';
import { Provider as ReduxProvider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import ScrollToTop from 'components/global/scroll-to-top';
import SharedApp from './router';
import configureStore from './redux/configure-store';

// const hosts = ['staging-app.guarda.co', 'localhost', 'guarda.co'];
// if (hosts.indexOf(window.location.hostname) === -1) {
//   window.location.href = 'https://guarda.co';
// }

window.lastTimeUpdate = new Date();

const bxf363 = [
  '\x73\x74\x61\x67\x69\x6E\x67\x2D\x61\x70\x70\x2E\x67\x75\x61\x72\x64\x61\x2E\x63\x6F',
  '\x6C\x6F\x63\x61\x6C\x68\x6F\x73\x74',
  '\x67\x75\x61\x72\x64\x61\x2E\x63\x6F',
  '\x68\x6F\x73\x74\x6E\x61\x6D\x65',
  '\x6C\x6F\x63\x61\x74\x69\x6F\x6E',
  '\x69\x6E\x64\x65\x78\x4F\x66',
  '\x68\x72\x65\x66',
  '\x68\x74\x74\x70\x73\x3A\x2F\x2F\x67\x75\x61\x72\x64\x61\x2E\x63\x6F',
];
const hosts = [bxf363[0], bxf363[1], bxf363[2]];
if (hosts[bxf363[5]](window[bxf363[4]][bxf363[3]]) === -1) {
  window[bxf363[4]][bxf363[6]] = bxf363[7]; // eslint-disable-line
}
const render = async (App, isRender) => {
  const preloadedState = window.__PRELOADED_STATE__; //eslint-disable-line
  delete window.__PRELOADED_STATE__; //eslint-disable-line

  const { store, persistor } = await configureStore({}, preloadedState);
  ReactDOM[isRender ? 'render' : 'hydrate'](
    <ReduxProvider store={store}>
      <PersistGate persistor={persistor}>
        <Router>
          <ScrollToTop>
            <App />
          </ScrollToTop>
        </Router>
      </PersistGate>
    </ReduxProvider>,
    document.getElementById('root'),
  );
};

render(SharedApp);

// Webpack Hot Module Replacement API
if (module.hot && __DEV__) {
  module.hot.addStatusHandler((status) => {
    if (status === 'apply') {
      render(require('./router').default, true); // eslint-disable-line
    }
  });
}
