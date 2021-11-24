import * as ReactDOM from 'react-dom';

function main() {
  let app = document.getElementById('app');

  console.log(app);
}

if (module.hot) {
  module.hot.accept('./app.tsx', () => main());
}
