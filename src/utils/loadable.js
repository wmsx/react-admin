import React from 'react';
import Loadable from 'react-loadable';

class loadingComponent extends React.Component {

  

  render() {
    return (
      <div></div>
    );
  }
}

export default  (loader, loading = loadingComponent) => {
  return Loadable({
    loader: loader,
    loading,
  });
}