import * as React from 'react';
import * as ReactDOM from 'react-dom';

let rootElement = document.getElementById('root');

if (rootElement === null) {
  rootElement = document.body.appendChild(document.createElement('div'));
  rootElement.id = 'root';
}

async function main() {
  const App = (await import('./app')).App;

  ReactDOM.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>,
    rootElement,
  );
}

main();

if (module.hot) {
  module.hot.accept('./app.tsx', () => main());
}
