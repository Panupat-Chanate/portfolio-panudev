import React, { Component } from 'react';

export default class Footer extends Component{
    render () {
      return (
        <div className="App">
            <footer className="footer">
                <p className="footer__title">Panupat Chanate</p>
                <div className="footer__social">
                    <a href="https://www.facebook.com/c.panupat" className="footer__icon"><i className='bx bxl-facebook' ></i></a>
                    <p>panupat.chanate@gmail.com</p>
                </div>
                <p>&#169; 2020 copyright all right reserved</p>
            </footer>
        </div>
      );
    }
      
  }