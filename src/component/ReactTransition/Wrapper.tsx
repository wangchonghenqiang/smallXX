import { Component } from 'react';

class Wrapper extends Component<React.ReactNode> {
  render() {
    return this.props.children;
  }
}

export default Wrapper;
