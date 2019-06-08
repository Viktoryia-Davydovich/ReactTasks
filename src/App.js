import React, { Component } from 'react';
import { Provider } from 'react-redux';

import RoutingContainer from './containers/RoutingContainer'
import store from './store';

class App extends Component {
  render () {
    return (
      <Provider store={store}>
        <RoutingContainer>
        </RoutingContainer>
      </Provider>
    )
  }
}

export default App;