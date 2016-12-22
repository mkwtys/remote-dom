importScripts(['require.js']);
requirejs.config({
//By default load any module IDs from js/lib
  paths: {
    remoteDOM: '../dist/remote',
    // react: './react.min',
    // reactDOM: './react-dom.min'
    react: './react.min',
    reactDOM: './react-dom.min',
    todo: './todo',
    dbmonster: './dbmonster',
    masonry: './masonry'
  }
});
require(['remoteDOM'], function (remoteDOM) {
  self.window = remoteDOM.window;
  self.document = remoteDOM.document;
  remoteDOM.setChannel(self);
  require(['react', 'reactDOM', 'masonry'], function (React, ReactDOM, App) {
    ReactDOM.render(React.createElement(App), remoteDOM.createContainer())
  });
})
