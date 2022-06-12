import React, { Component } from 'react';

class CopyRight extends Component {
  render() {
    return (
      <div className="col-lg-4 col-md-12 col-sm-12 col-12">
        <div className="text-lg-right text-center mt_md--20 mt_sm--20">

          <p>
            {'Copyright © '}
            <a href="https://matheusmf.com/" target="_blank" rel="noreferrer">
              Matheus Mandotti
            </a>{' '}
            {new Date().getFullYear()}
            {'.'}
          </p>
        
        </div>
      </div>
    );
  }
}

export default CopyRight;