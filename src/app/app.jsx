(function () {
  let React = require('react');
  let ReactDOM = require('react-dom');
  let Main = require('./components/main.jsx');
  // For React Dev Tools
  window.React = React;
  ReactDOM.render(<Main />, document.getElementById('app'));

})();
